import React, { Component } from 'react';
import './fun.css';
import ProductList from './furniture';
import ShoppingCart from './shopping';
import OrderPage from './order';
import axios from 'axios';

class Naveen extends Component {
  state = {
    products: [], // Products fetched from the API with prices remaining to be added
    cart: [],
    showOrderForm: false,
  };

  componentDidMount() {
    // Fetch product data including prices from your backend REST API
    axios.get('http://localhost:8080/api/products/get')
      .then((response) => {
        const productsWithPrices = response.data.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price, // Update the price with the actual value from the API
        }));
        this.setState({ products: productsWithPrices });
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  removeFromCart = (productId) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== productId),
    }));
  };

  render() {
    return (
      <div className="App">
        {/* Add the background video */}
        <video autoPlay muted loop className="background-video">
          <source src="https://cdn.pixabay.com/vimeo/201118756/animation-7529.mp4?width=640&hash=f307e3741dd779021a42cf6ee16d1d75f5274825" type="video/mp4" />
        </video>

        <header className="App-header">
          <h1>Online Furniture Store</h1>
        </header>
        <div className="centered-container">
          <h1 className="rainbow-text">SMARTSHOP</h1>
        </div>

        {/* Conditionally render the order form or the shopping cart */}
        {this.state.showOrderForm ? (
          <OrderPage /> // Render the OrderPage component when showOrderForm is true
        ) : (
          <div>
            <ProductList products={this.state.products} addToCart={this.addToCart} />
            <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart} />

            {/* Add an "Order" button that toggles the order form */}
            <button className="order-button" onClick={() => this.setState({ showOrderForm: true })}>
              Order
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Naveen;
