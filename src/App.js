import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Signup from './pages/SignUp';
import WEBFRAME from './pages/Search';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Welcome from './pages/Welcome';

// CREATES ROUTES FOR PAGES 
// SETS UP REDUX IN CASE
// USES DEFAULT THEME PROVIDER

function App() {
  const defaultTheme = createTheme();
  const navBar = new NavBar();
 
  return (
    <ThemeProvider theme={defaultTheme} >
        {
          <Routes>
            {/* set up welcome page route for '/' */}
            <Route path='/' element={<Welcome />} />
            <Route path="home" element={<Home navBar={navBar} />}>
              <Route index element={<WEBFRAME />} />
              <Route path='account' element={<Account navbar={navBar}/>} />
              <Route path='cart' element={<Cart />} />
              <Route path='webframe' element={<WEBFRAME />} />
            </Route>
            <Route path='login' element={<Login navbar={navBar} />} />
            <Route path='signUp' element={<Signup navbar={navBar} />} >
              {/* <Route path='signUp/info' element={<SignupInfo />} /> */}

            </Route>
          </Routes>
        }
    </ThemeProvider>
  );
}

export default App;
