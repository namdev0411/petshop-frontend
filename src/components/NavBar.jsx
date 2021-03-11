import React, { useState } from 'react'
import './NavBar.scss';
import {Link} from 'react-router-dom';

export default function NavBar() {
    const [displayNav, setdisplayNav] = useState(false);
    return (
        <div className="navbar grid">
            <div className="home_logo">
                <img src="/images/logo.png" alt="Logo" className="home_logo--image"/>
            </div>
            <ul className={displayNav? "nav_list active": "nav_list"}>
                <li className="nav_list--item">
                    <Link to="/home">Home</Link>
                </li> 
                <li className="nav_list--item">
                    <Link to="/shop">Shop</Link>
                </li> 
                <li className="nav_list--item">
                    <Link to="/about">About</Link>
                </li> 
                <li className="nav_list--item">
                    <Link to="/contact">Contact</Link>
                </li> 
                <li className="nav_list--item">
                    <Link to="/account">Account</Link>
                </li>
                <li className="nav_list--item cart">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </li> 
            </ul>
            <div className="menu__icon"
                onClick={()=>setdisplayNav(curr=>!curr)}
            >
                <p className="menu__icon__item"></p>
                <p className="menu__icon__item"></p>
                <p className="menu__icon__item"></p>
            </div>
        </div>
    )
}
