import React from 'react'
import Banner from './Banner';
import './Header.scss';
import NavBar from './NavBar';

export default function Header() {
    return (
        <div className="header">
            <NavBar/>
            <Banner/>
        </div>
    )
}
