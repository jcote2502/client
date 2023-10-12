// Home.js
import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';
const Home= ({navBar}) => {
  return (
    <div>
      {navBar.render()}
      <div className='sub-page'>
      <Outlet/>
      </div>
      {/* Add content for the home page */}
    </div>
  );
}

export default Home;