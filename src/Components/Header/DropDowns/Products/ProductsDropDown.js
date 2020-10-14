import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsDropDown.css';
import { ProductsMenuItems } from './ProductsMenuItems';

export default function ProductsDropDown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
                onClick={handleClick}>
                {ProductsMenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path}
                                className={item.cName}
                                onClick={()=> {
                                    setClick(false)
                                }}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}