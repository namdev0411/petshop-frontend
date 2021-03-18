import React from 'react'
import CartBody from '../components/CartBody';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'

export default function ({cart,setcart}) {
    return (
        <div>
            <NavBar/>
            <CartBody cart={cart} setcart={setcart}/>
            <Footer/>
        </div>
    )
}
