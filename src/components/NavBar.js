import React from "react";
import '../styles/NavBar.css';
import {useNavigate } from "react-router-dom";

function NavBar({ isSignedIn }) {

    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="title">Website Title</div>
            {
                isSignedIn ?
                    <div className="user-info">
                        <span>User Name</span>
                        <span>Shopping Cart Icon</span>
                        <span>User Icon</span>
                    </div>
                    :
                    <div className="user-controls">
                        <button onClick={() => handleSignup()}>Sign Up</button>
                        <button>Login</button>
                    </div>
            }
        </nav>
    );
}
export default NavBar;