import React from "react";
import '../styles/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/nfl.svg';
import profileIcon from '../assets/images/profile.svg';
import cartIcon from '../assets/images/cart.svg';

// AUTHOR: Justin Cote
// NAVBAR
// Provides user with ability to navigate website
// State changes upon login

class NavBar extends React.Component {
    constructor() {
        super();
        this.isSignedIn = false;
        this.fname = null;
    }
    handleLogin = (fname) => {
        this.isSignedIn = true;
        this.fname = fname;
    };

    handleLogOut = () => {
        this.isSignedIn = false;
        this.fname = null;
    }

    getUid = () => {
        return this.uid
    }

    render() {
        return (
            <nav className="navbar">
                <HomeButton />
                <div className="title">431w NFL FanGearShop</div>
                {
                    this.isSignedIn ?
                        <div className="user-info">
                            <span>Hello {this.fname}!</span>
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
}
function HomeButton() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/home");
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