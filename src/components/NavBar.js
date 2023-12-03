import React from "react";
import '../styles/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from './Assets/images/nfl.svg';
import profileIcon from './Assets/images/profile.svg';
import cartIcon from './Assets/images/cart.svg';

// AUTHOR: Justin Cote
// NAVBAR
// Provides user with ability to navigate website
// State changes upon login

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <HomeButton />
            <div className="title">431w NFL FanGearShop</div>
            {
                props.user.loggedIn ?
                    <div className="user-info">
                        <span>Hello {props.user.fname}!</span>
                        <span><CartButton /></span>
                        <span><AccountButton /></span>
                    </div>
                    :
                    <div className="user-controls">
                        <Navigation />
                    </div>
            }
        </nav>
    );
}
function HomeButton() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    return (
        <img className="logo" onClick={()=>goToHome()} src={logo} alt="Logo" />
        )
}
function CartButton() {
    const navigate = useNavigate();
    const goToCart = () => {
        navigate("cart");
    }
    return (
        <img className="logo" onClick={() => goToCart()} src={cartIcon} />
    );
}
function AccountButton() {
    const navigate = useNavigate();
    const goToAccount = () => {
        navigate("account");
    }
    return (
        <img className="logo" onClick={() => goToAccount()} src={profileIcon} />
    );
}
function Navigation() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    }
    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <>
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleLogin}>Log In</button>
        </>
    )
}
export default NavBar;