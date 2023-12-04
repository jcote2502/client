import { useState } from 'react';
import NavBar from './Components/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './Pages/Account.js';
import Cart from './Pages/Cart.js';
import Signup from './Pages/SignUp.js';
import Login from './Pages/Login.js';
import Product from './Components/Product.js';
import { WEBFRAME } from './Pages/Search.js';

function App() {

  const [user, setUser] = useState({ loggedIn: false, fname: '' });

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser({ loggedIn: false, fname: '' });
  };

  return (
    <>
      {
        <Router>
            <NavBar user={user} />
            <Routes>
              <Route path='/' element={<WEBFRAME />} />
              <Route path='/shop' element={<WEBFRAME />} />
              <Route path='/account' element={<Account handleLogout={handleLogout} />} />
              <Route path='/login' element={<Login handleLogin={handleLogin} />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='signUp' element={<Signup handleLogin={handleLogin} />} />
              <Route path="/product" element={<Product />}>
                <Route path=':productID' element={<Product />} />
              </Route>
            </Routes>
        </Router>
      }
    </>
  );
}
export default App;
