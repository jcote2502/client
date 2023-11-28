import React , {useState} from 'react';
import jerseyIcon from '../assets/images/jersey.jpeg';
import joggersIcon from '../assets/images/joggers.jpeg';
import sandalIcon from '../assets/images/sandal.png';
import shirtIcon from '../assets/images/shirt.png';
import shortIcon from '../assets/images/shorts.jpeg';
import sneakerIcon from '../assets/images/sneaker.png';
import '../styles/Cart.css';

// AUTHOR(s): Justin Cote, Liam Garrett
// Displays all items currently in cart
// Used to checkout, remove items , or clear cart


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items, replace with your actual data
    { id: 1, name: 'Product 1', size: 'M', price: 20, color: 'Blue', details: 'Lorem ipsum', img:jerseyIcon},
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
    { id: 2, name: 'Product 2', size: 'L', price: 30, color: 'Red', details: 'Lorem ipsum',img:joggersIcon },
  ]);

  const handleContainerClick = (productId) => {
    // Implement navigation to product page
    console.log(`Go to product page with ID: ${productId}`);
  };

  const handleRemoveItemClick = (productId) => {
    // Implement the logic to remove item from the cart (send a POST request to the backend)
    console.log(`Remove item with ID: ${productId}`);
  };

  const calculateTotalPrice = () => {
    // Calculate total price based on cart items
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckoutClick = () => {
    // Implement checkout logic
    console.log('Proceed to checkout');
  };

  const handleClearCartClick = () => {
    // Implement clear cart logic
    console.log('Clear cart');
  };

  return (
    <div className="cart-container">
      <div className="product-list">
        {cartItems.map((item) => (
          <div key={item.id} className="product-container" onClick={() => handleContainerClick(item.id)}>
            <img className="product-image" src={item.img} alt={item.name} />
            <div className="product-details">
              <h3>{item.name}</h3>
              <p>{`Size: ${item.size} | Price: $${item.price} | Color: ${item.color}`}</p>
              <p>{item.details}</p>
            </div>
            <button className="remove-item" onClick={() => handleRemoveItemClick(item.id)}>
              X
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">Total: ${calculateTotalPrice()}</div>
        <div className="buttons">
          <button className="checkout-button" onClick={handleCheckoutClick}>
            Checkout
          </button>
          <button className="clear-cart-button" onClick={handleClearCartClick}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;