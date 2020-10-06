import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    
    render() {
        return (
            <>
                <header>
                    <h1>Eratk Designs</h1>
                    <div>
                        <Link>Login</Link>
                        <Link>Sign Up</Link>
                    </div>
                </header>
                <nav>
                    <Link>Products</Link>
                    <Link>Design</Link>
                    <Link>Templates</Link>
                    <Link>Your Account</Link>
                </nav>
            </>
        );
    }
}

export default Header;