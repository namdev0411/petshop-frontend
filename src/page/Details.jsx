import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PetDetail from '../components/PetDetail'

export default function Details({data}) {
    return (
        <div>
            <NavBar/>
            <PetDetail allpets={data.allpets} offer={data.offer}/>
            <Footer/>
        </div>
    )
}
