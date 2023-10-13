import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Welcome = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-box-message'>
        <h2>Welcome to 431w NFL FanGearShop</h2>
        <p>Developed by Justin Cote and Liam Garrett</p>
        <div className='large-spacer'/>
        <Link to="/home" className='welcome-button'>
          Continue to Website
        </Link>
      </div>
    </div>
  );
};

export default Welcome;