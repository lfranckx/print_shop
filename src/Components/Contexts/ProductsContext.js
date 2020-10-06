import React, { Component } from 'react';

export const nullProduct = {};
export const nullUser = {};

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
    setUser: () => {},
    clearUser: () => {},
    setProductsList: () => {},
    toggleActive: () => {}
});
export default ProductsContext;

export class ProductsProvider extends Component {
    state = {
        error: null,
        product: nullProduct,
        user: nullUser,
        productsList: [],
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

    setUser = user => {
        this.setState({ user });
    };

    clearUser = () => {
        this.setState(nullUser);
    };

    setProductsList = productsList => {
        this.setState({ productsList });
    };

    toggleActive = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        const value = {
            error: this.state.error,
            product: this.state.product,
            user: this.state.user,
            productsList: this.state.productsList,
            active: this.state.active,
            setError: this.setError,
            clearError: this.clearError,
            setProduct: this.setProduct,
            clearProduct: this.clearProduct,
            setUser: this.setUser,
            clearUser: this.clearUser,
            setProductsList: this.setProductsList,
            toggleActive: this.toggleActive
        };

        return (
            <ProductsContext.Provider value={value}>
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}