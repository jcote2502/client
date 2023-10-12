import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Signup from './pages/SignUp';
import Search from './pages/Search';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {

  const defaultTheme = createTheme();
  const navBar = new NavBar();

  return (
    <ThemeProvider theme={defaultTheme} >
      <Router>
        {
          <Routes>
            <Route index element={<Home navBar={navBar}/>} />
            <Route path="home" element={<Home navBar={navBar} />}>
              <Route index element={<Search />} />
              <Route path='account' element={<Account />} />
              <Route path='search' element={<Search />} />
            </Route>
            <Route path='login' element={<Login navbar={navBar}/>} />
            <Route path='signUp' element={<Signup navbar={navBar} />}>
              {/* <Route path='signUp/info' element={<SignupInfo />} /> */}

            </Route>
          </Routes>
        }
      </Router>
    </ThemeProvider>
  );
}

export default App;
