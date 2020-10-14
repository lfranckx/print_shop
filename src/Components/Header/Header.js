import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

import ProductsDropDown from './DropDowns/Products/ProductsDropDown';
import DesignLabDropDown from './DropDowns/DesignLab/DesignLabDropDown';

function Header() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 760) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 760) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    }

    return (
        <>
            <header>
                <nav aria-label="secondary"
                    className="sub-header">
                    <h2>Create custom logos and designs for t-shirts and more</h2>
                    <div>
                        <Link to="/">Contact</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">Create Account</Link>
                    </div>
                </nav>
                <div>
                    <Link className="title-logo" to="/">
                        <i class="fab fa-cotton-bureau"></i>
                        <h1>Custom Designs</h1>
                    </Link>
                </div>
            </header>
            <nav className="nav-menu">
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/" 
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Products <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <ProductsDropDown />}
                    </li>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/design-lab" 
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Design Lab
                        </Link>
                        {dropdown && <DesignLabDropDown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/" 
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Templates
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" 
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Your Account
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;