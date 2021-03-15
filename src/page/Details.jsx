import React from 'react'
import NavBar from '../components/NavBar'
import PetDetail from '../components/PetDetail'

export default function Details({data}) {
    
    return (
        <div>
            <NavBar/>
            <PetDetail allpets={data.allpets}/>
        </div>
    )
}
