import React from 'react'
import NavBar from '../components/NavBar'
import Sort from '../components/Sort'
import ListPets from '../components/ListPets'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

export default function Shop({data,cartHandle}) {
    return (
        <div>
             <NavBar/>
             <Sort/>
             <ListPets listPets={data.allpets} cartHandle={data.cartHandle}/>
             <div className="container">
                <Pagination allPage={3}/>
             </div>
             <Footer/>
        </div>
    )
}
