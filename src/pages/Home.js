// Home.js
import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar';
const Home= ({navBar}) => {
  return (
    <div>
      {navBar.render()}
      <div className='sub-page'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Home;