import React from 'react'
import NavBar from '../components/NavBar'
import Sort from '../components/Sort'
import ListPets from '../components/ListPets'
import Footer from '../components/Footer'

export default function Shop({data}) {
    return (
        <div>
             <NavBar/>
             <Sort/>
             <ListPets listPets={data.allpets}/>
             <Footer/>
        </div>
    )
}
