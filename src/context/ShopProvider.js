import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
	storefrontAccessToken: process.env.REACT_APP_SHOPIFY_KEY,
	domain: 'testStorejulliD.myshopify.com'
});

class ShopProvider extends Component {
	state = {
		products: [],
		product: {},
		checkout: {},
		isCartOpen: false
	};

	componentDidMount() {
		this.createCheckout();
	}

	createCheckout = async () => {};

	addItemToCart = async (variantId, quantity) => {};

	fetchAllProducts = async () => {};

	fetchProductWithId = async id => {};

	fetchProductCollection = async () => {};

	closeCart = () => {};

	openCart = () => {};

	render() {
		return <ShopContext.Provider value={{ ...this.state }}>{this.props.children}</ShopContext.Provider>;
	}
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };

export default ShopProvider;
