
import { useState } from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">Smart Locker Logo</div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search tools..." />
                </div>
                <div className="notifications">
                    <button>🔔</button>
                </div>
                <div className="user-profile">
                    <span>👤</span>
                    <div className="dropdown">
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};



export default Header;
