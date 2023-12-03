import { useState } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './Pages/Account';
import Cart from './Pages/Cart';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import Product from './Components/Product';
import { WEBFRAME } from './Pages/Search';

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
