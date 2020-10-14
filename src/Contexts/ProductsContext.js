import React, { Component } from 'react';

export const nullProduct = {};
export const nullUser = {};
export const nullProductsList = [];

const ProductsContext = React.createContext({
    error: null,
    product: nullProduct,
    user: nullUser,
    productsList: [],
    active: false,
    setError: () => {},
    clearError: () => {},
    setProduct: () => {},
    clearProduct: () => {},
    setProductsList: () => {},
    clearProductsList: () => {},
    setUser: () => {},
    clearUser: () => {},
    toggleActive: () => {}
});
export default ProductsContext;

export class ProductsProvider extends Component {
    state = {
        error: null,
        product: nullProduct,
        productsList: [],
        user: nullUser,
        active: false
    };

    setError = error => {
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };

    setProduct = product => {
        this.setState({ product });
    };

    clearProduct = () => {
        this.setProduct(nullProduct);
    };

    setProductsList = productsList => {
        console.log('context setting productsList:', productsList);
        this.setState({ productsList });
    };

    clearProductsList = () => {
        this.setProductsList(nullProductsList);
    };

    setUser = user => {
        this.setState({ user });
    };

    clearUser = () => {
        this.setState(nullUser);
    };

    toggleActive = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        const value = {
            state: this.state,
            error: this.state.error,
            product: this.state.product,
            user: this.state.user,
            productsList: this.state.productsList,
            active: this.state.active,
            setError: this.setError,
            clearError: this.clearError,
            setProduct: this.setProduct,
            clearProduct: this.clearProduct,
            setProductsList: this.setProductsList,
            clearProductsList: this.clearProductsList,
            setUser: this.setUser,
            clearUser: this.clearUser,
            toggleActive: this.toggleActive
        };

        return (
            <ProductsContext.Provider value={value}>
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}