import React from "react";
import '../styles/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/nfl.svg';


class NavBar extends React.Component {
    constructor() {
        super();
        this.isSignedIn = false;
    }

    handleSignup = () => {
        this.isSignedIn = true;
    };

    render() {
        return (
            <nav className="navbar">
                <img className="logo" src={logo} alt="Logo" />
                <div className="title">431w NFL FanGearShop</div>
                {
                    this.isSignedIn ?
                        <div className="user-info">
                            <span>User Name</span>
                            <span>Shopping Cart Icon</span>
                            <span>User Icon</span>
                        </div>
                        :
                        <div className="user-controls">
                            <Navigation signInCallback={() => this.handleSignup} />
                        </div>
                }
            </nav>
        );
    }
}
function Navigation({ signInCallback }) {
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