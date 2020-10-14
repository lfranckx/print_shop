import React, { Component } from 'react';
import './MainPage.css';
import dummy from '../../dummy-store';
import ProductsContext from '../../Contexts/ProductsContext';
// import ProductApiService from '../../Services/product-api-service';
import ProductsListItem from '../../Components/ProductsListItem/ProductsListItem'



class MainPage extends Component {
    static contextType = ProductsContext;

    componentDidMount() {
        this.context.clearError();
        this.context.setProductsList(dummy.shirts);
    }

    renderProducts() {
        const { productsList } = this.context;
        if (productsList.length === 0) {
            return (
                <div>Loading...</div>
            );
        }

        return productsList.map(product =>
            <ProductsListItem 
                key={product.id}
                product={product}
            />
        );
    }
    
    render() {
        const { error } = this.context;
        return (
            <>
                <h2>Custom t-shirts and clothing</h2>
                <section>
                    {error
                        ? <p>There was an error try again</p>
                        : this.renderProducts()
                    }
                </section>
            </>
        );
    }
}

export default MainPage;