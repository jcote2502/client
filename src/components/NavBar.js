import React from "react";
import '../styles/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/nfl.svg';
import profileIcon from '../assets/images/profile.svg';
import cartIcon from '../assets/images/cart.svg';
class NavBar extends React.Component {
    constructor() {
        super();
        this.isSignedIn = false;
        this.fname = null;
        this.uid = null;
    }
    handleSignup = async (uid,fname) => {
        this.isSignedIn = true;
        this.uid = uid;
        this.fname = fname;
    };

    render() {
        console.log(this.fname);
        console.log(this.isSignedIn);
        return (
            <nav className="navbar">
                <img className="logo" src={logo} alt="Logo" />
                <div className="title">431w NFL FanGearShop</div>
                {
                    this.isSignedIn ?
                        <div className="user-info">
                            <span>Hello {this.fname}!</span>
                            <span><img className="logo" src={cartIcon} alt="cart_icon"/></span>
                            <span><img className="logo" src={profileIcon} alt="account_icon"/></span>
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