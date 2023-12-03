import React, { useEffect, useState } from 'react';
import myIcons from '../MyIcons';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import cart from '../utils/Cart';
import user from '../utils/User';

// AUTHOR(s): Justin Cote 
// Displays all items currently in cart
// Used to checkout, remove items , or clear cart


const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const getImage = (product) => {
      console.log(product);
      switch (product.title) {

          // single shirt image
          case 'shirts':
              return myIcons.getShirtIcon();
          // check if joggers or shorts
          case 'pants':
              if (product.details === 'joggers') {
                  return myIcons.getJoggersIcon();
              } else {
                  return myIcons.getShortIcon();
              }
          // check if sneakers or sandals
          case 'shoes':
              if (product.details === 'sandals') {
                  return myIcons.getSandalIcon();
              } else {
                  return myIcons.getSneakerIcon();
              }
          case 'jersey':
              return myIcons.getJerseyIcon();
          default:
              return null;
      }
  }
  const loadCart = async () => {
    const response = await cart.getCart(user.user_ID);
    if (response.status) {
      setCartItems(cart.items);
    } else {
      console.error('Error Fetching Cart:', response.error);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  // Navigates to Product View
  const handleContainerClick = (productId) => {
    navigate('/home/product')
  };

  // Removes Item From Cart
  const handleRemoveItemClick = async (cartID) => {
    const response = await cart.removeItem(cartID);
    if (response.status) {
      loadCart();
    } else {
      console.error('Error Removing Item:', response.error);
    }
  };

  // Calculates Price to Display
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.Price), 0).toFixed(2);
  };

  // Handles Purchasing Cart
  const handleCheckoutClick = async () => {
    const IDs = cart.getIDs();
    const response = await cart.purchaseCart(user.user_ID,IDs);
    if (response.status) {
      console.log('Successfully Purchased');
      const clearCart = await cart.clearCart(user.user_ID);
      if (clearCart.status) {
        alert('Purchase Successful!');
        loadCart();
        console.log('Purchase Successful!');
      }
    } else {
      console.error('Error Purchasing Cart:', response.error);
    }
  };

  // Handles Clearing Cart
  const handleClearCartClick = async () => {
    const response = await cart.clearCart(user.user_ID);
    if (response.status){
      loadCart();
    }else{
      console.error('Error Clearing Cart:',response.error);
    }
  };

  return (
    <div className="cart-container">
        {
        cartItems.length > 0 ?
        cartItems.map((item) => (
          <div key={item.cart_ID}>
            <div className="cart-product-container" onClick={() => handleContainerClick(item.product_ID)}>
              <img className="product-image" src={getImage(item)} alt={item.title} />
              <div className="product-details">
                <h3>{item.name}</h3>
                <p>{`Size: ${item.size} | Price: $${item.Price} | Color: ${item.color}`}</p>
                <p>{item.details}</p>
              </div>
            </div>
            <button className="remove-item" onClick={() => handleRemoveItemClick(item.cart_ID)}>X</button>
          </div>
        )):<h1>No Items In Cart</h1>}
      <div className="cart-summary">
        <div className="total">Total: ${calculateTotalPrice()}</div>
        <div className="buttons">
          <button className="checkout-button" onClick={() => handleCheckoutClick()}>
            Checkout
          </button>
          <button className="clear-cart-button" onClick={() => handleClearCartClick()}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;