// import React from 'react';

// const ShoppingCart = ({ cart }) => {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingCart;
// import React from 'react';
// import './shopping.css';
// const ShoppingCart = ({ cart }) => {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul className="cart-items">
//         {cart.map((item) => (
//           <li key={item.id} className="cart-item">
//             <div className="cart-item-info">
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <p className="cart-item-name">{item.name}</p>
//                 <p className="cart-item-price">${item.price.toFixed(2)}</p>
//               </div>
//             </div>
//             <button className="remove-button">Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingCart;
// import React from 'react';

// const ShoppingCart = ({ cart, removeFromCart }) => {
//     // Calculate the total price of items in the cart
//     const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  
//     return (
//       <div className="cart">
//         <h2>Shopping Cart</h2>
//         <ul className="cart-items">
//           {cart.map((item) => (
//             <li key={item.id} className="cart-item">
//               <div className="cart-item-info">
//                 <img src={item.image} alt={item.name} />
//                 <div>
//                   <p className="cart-item-name">{item.name}</p>
//                   <p className="cart-item-price">${item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//               <button
//                 className="remove-button"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//         {/* Display the total price */}
//         <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
//       </div>
//     );
//   };
  
//   export default ShoppingCart;
import React from 'react';
import OrderPage from './order';

const ShoppingCart = ({ cart, removeFromCart }) => {
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart shopping-cart-background"> {/* Add the "shopping-cart-background" class */}
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              {/* <img src={item.image} alt={item.name} /> */}
              <div>
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* Display the total price */}
      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      
      
    </div>
  );
};

export default ShoppingCart;


