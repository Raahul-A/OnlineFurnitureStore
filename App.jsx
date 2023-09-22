// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Logger from './components/Pass';
// import LoginForm from './components/login';
// import './App.css';
// import ProductList from './components/products';
// import Footer from './components/Footer';


// function App() {
//   return (
//     <Router>
//       <div>
//         <div className='you'><h1>SMARTSHOP</h1></div>
//         <Routes>
         
//            <Route path="/" element={<Logger />} /> 
//         <Route path="/home" element={<ProductList />} />
//         </Routes> 
//        </div> 
//     </Router> 
    
//   );
// }

// export default App;
//naveen
// import React, { Component } from 'react';
// // import './App.css';
// // import { Imag } from './assets/img1.jpg';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';

// class App extends Component {

//   state = {
//     products: [
//       {
//         id: 1,
//         name: 'Elegant Sofa',
//         description: 'A comfortable and stylish sofa for your living room.',
//         price: 499.99,
//         image: 'img1.jpg',
//       },
//       // Add more products here
//     ],
//     cart: [],
//   };

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Online Furniture Store</h1>
//         </header>
//         <ProductList products={this.state.products} addToCart={this.addToCart} />
//         <ShoppingCart cart={this.state.cart} />
//       </div>
//     );
//   }
// }

// export default App;
// import React, { Component } from 'react';
// import './products/fun.css';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     products: [
//       {
//         // id: 1,
//         // name: 'Elegant Sofa',
//         // description: 'A comfortable and stylish sofa for your living room.',
//         // image: 'sofa.jpg',
//         // price: 0,
//       },
//       // Add more products here
//     ],
//     cart: [],
//   };

//   componentDidMount() {
//     // Fetch product data including prices from your backend REST API
//     axios.get('http://localhost:8080/api/products/get')
//       .then((response) => {
//         const productsWithPrices = response.data.map((product) => ({
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           image: product.image,
//           price: product.price, // Update the price with the actual value from the API
//         }));
//         this.setState({ products: productsWithPrices });
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Online Furniture Store</h1>
//         </header>
//         <ProductList products={this.state.products} addToCart={this.addToCart} />
//         <ShoppingCart cart={this.state.cart} />
//       </div>
//     );
//   }
// }

// export default App;
// import React, { Component } from 'react';
// import './products/fun.css';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     products: [], // Products fetched from the API with prices remaining to be added
//     cart: [],
//   };

//   componentDidMount() {
//     // Fetch product data including prices from your backend REST API
//     axios.get('http://localhost:8080/api/products/get')
//       .then((response) => {
//         const productsWithPrices = response.data.map((product) => ({
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           image: product.image,
//           price: product.price, // Update the price with the actual value from the API
//         }));
//         this.setState({ products: productsWithPrices });
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   removeFromCart = (productId) => {
//     this.setState((prevState) => ({
//       cart: prevState.cart.filter((item) => item.id !== productId),
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Online Furniture Store</h1>
//         </header>
//         <ProductList products={this.state.products} addToCart={this.addToCart} />
//         <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart} />
//       </div>
//     );
//   }
// }

// export default App;
// import React, { Component } from 'react';
// import './products/fun.css';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     products: [], // Products fetched from the API with prices remaining to be added
//     cart: [],
//   };

//   componentDidMount() {
//     // Fetch product data including prices from your backend REST API
//     axios.get('http://localhost:8080/api/products/get')
//       .then((response) => {
//         const productsWithPrices = response.data.map((product) => ({
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           image: product.image,
//           price: product.price, // Update the price with the actual value from the API
//         }));
//         this.setState({ products: productsWithPrices });
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   removeFromCart = (productId) => {
//     this.setState((prevState) => ({
//       cart: prevState.cart.filter((item) => item.id !== productId),
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* Add the background video */}
//         <video autoPlay muted loop className="background-video">
//           <source src="https://cdn.pixabay.com/vimeo/201118756/animation-7529.mp4?width=640&hash=f307e3741dd779021a42cf6ee16d1d75f5274825" type="video/mp4" />
//         </video>

//         <header className="App-header">
//           <h1>SMARTSHOP</h1>
//         </header>
//         <ProductList products={this.state.products} addToCart={this.addToCart} />
//         <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart} />
//       </div>
//     );
//   }
// }

// export default App;
// import React, { Component } from 'react';
// import './products/fun.css';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     products: [], // Products fetched from the API with prices remaining to be added
//     cart: [],
//   };

//   componentDidMount() {
//     // Fetch product data including prices from your backend REST API
//     axios.get('http://localhost:8080/api/products/get')
//       .then((response) => {
//         const productsWithPrices = response.data.map((product) => ({
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           image: product.image,
//           price: product.price, // Update the price with the actual value from the API
//         }));
//         this.setState({ products: productsWithPrices });
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   removeFromCart = (productId) => {
//     this.setState((prevState) => ({
//       cart: prevState.cart.filter((item) => item.id !== productId),
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* Add the background video */}
//         <video autoPlay muted loop className="background-video">
//           <source src="https://cdn.pixabay.com/vimeo/201118756/animation-7529.mp4?width=640&hash=f307e3741dd779021a42cf6ee16d1d75f5274825" type="video/mp4" />
//         </video>

//         <header className="App-header">
//           <h1 className="centered-text">SMARTSHOP</h1>
//         </header>
//         <ProductList products={this.state.products} addToCart={this.addToCart} />
//         <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart} />
//       </div>
//     );
//   }
// }

// export default App;
// import React, { Component } from 'react';
// import './products/fun.css';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     products: [], // Products fetched from the API with prices remaining to be added
//     cart: [],
//   };

//   componentDidMount() {
//     // Fetch product data including prices from your backend REST API
//     axios.get('http://localhost:8080/api/products/get')
//       .then((response) => {
//         const productsWithPrices = response.data.map((product) => ({
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           image: product.image,
//           price: product.price, // Update the price with the actual value from the API
//         }));
//         this.setState({ products: productsWithPrices });
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   removeFromCart = (productId) => {
//     this.setState((prevState) => ({
//       cart: prevState.cart.filter((item) => item.id !== productId),
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* Add the background video */}
//         <video autoPlay muted loop className="background-video">
//           <source src="https://cdn.pixabay.com/vimeo/201118756/animation-7529.mp4?width=640&hash=f307e3741dd779021a42cf6ee16d1d75f5274825" type="video/mp4" />
//         </video>

//         <header className="App-header">
//           <h1>Online Furniture Store</h1>
//         </header>
//         <div className="centered-container">
//           <h1 className="centered-text">SMARTSHOP</h1>
//         </div>
//         <ProductList products={this.state.products} addToCart={this.addToCart} />
//         <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart} />
//       </div>
//     );
//   }
// }

// export default App;
//thi is newly modified





// import React, { Component } from 'react';
// import './products/fun.css';
// import ProductList from './products/furniture';
// import ShoppingCart from './products/shopping';
// import OrderPage from './products/order';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     products: [], // Products fetched from the API with prices remaining to be added
//     cart: [],
//     showOrderForm: false,
//   };

//   componentDidMount() {
//     // Fetch product data including prices from your backend REST API
//     axios.get('http://localhost:8080/api/products/get')
//       .then((response) => {
//         const productsWithPrices = response.data.map((product) => ({
//           id: product.id,
//           name: product.name,
//           description: product.description,
//           image: product.image,
//           price: product.price, // Update the price with the actual value from the API
//         }));
//         this.setState({ products: productsWithPrices });
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }

//   addToCart = (product) => {
//     this.setState((prevState) => ({
//       cart: [...prevState.cart, product],
//     }));
//   };

//   removeFromCart = (productId) => {
//     this.setState((prevState) => ({
//       cart: prevState.cart.filter((item) => item.id !== productId),
//     }));
//   };

//   render() {
    
//       return (
//         <div className="App">
//           {/* Add the background video */}
//           <video autoPlay muted loop className="background-video">
//             <source src="https://cdn.pixabay.com/vimeo/201118756/animation-7529.mp4?width=640&hash=f307e3741dd779021a42cf6ee16d1d75f5274825" type="video/mp4" />
//           </video>
    
//           <header className="App-header">
//             <h1>Online Furniture Store</h1>
//           </header>
//           <div className="centered-container">
//             <h1 className="rainbow-text">SMARTSHOP</h1>
//           </div>
    
//           {/* Conditionally render the order form or the shopping cart */}
//           {this.state.showOrderForm ? (
//             <OrderPage /> // Render the OrderPage component when showOrderForm is true
//           ) : (
//             <div>
//               <ProductList products={this.state.products} addToCart={this.addToCart} />
//               <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart} />
    
//               {/* Add an "Order" button that toggles the order form */}
//               <button className="order-button" onClick={() => this.setState({ showOrderForm: true })}>
//                 Order
//               </button>
//             </div>
//           )}
//         </div>
//       );
//     }
    
  
// }

// export default App;
// import React from 'react';
// import Naveen from './products/naveen'; // Adjust the import path as needed
// // ... (other imports and code)
// function App() {
//   return (
//     <div className="App">
//       <Naveen />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Register from './Logreg/Register';
import LoginForm from './Logreg/singup';
import Naveen from './products/naveen';

function App() {
  return (
    <Router>
      <div>
        {/* <div className='you'><h1>SMARTSHOP</h1></div> */}
        <Routes>
         
           <Route path="/" element={<Register />} /> 
           <Route path="/login" element={<LoginForm />} />
        <Route path="/form" element={<Naveen />} />
        </Routes> 
       </div> 
    </Router> 
    
  );
}

export default App;



