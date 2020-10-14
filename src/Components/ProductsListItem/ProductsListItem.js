import React, { Component } from 'react';
import ProductsContext from '../../Contexts/ProductsContext';
import './ProductsListItem.css'

export default class ProductsListItem extends Component {
    static contextType = ProductsContext;

    render() {
        const { product } = this.props;
        console.log("product", product);
        
        return (
            <div className="product">
                <img src={product.url} alt={product.name}
                    className="thumbnail" />
                <h3>{product.name}</h3>
            </div>
        )
    }
}