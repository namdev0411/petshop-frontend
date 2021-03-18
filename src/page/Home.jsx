import React from 'react'
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import Categories from '../components/Categories';
import ListPets from '../components/ListPets';
import Offer from '../components/Offer';
import Footer from '../components/Footer';
import Pay from '../components/Pay';

export default function Home({data,cartHandle}) {
    return (
        <div>
            <Header/>
            <Categories categories={data.categories}/>
            <ContentTitle title="Feature"/>
            <ListPets listPets={data.listPets} cartHandle={data.cartHandle}/>
            <Offer offer={data.offer} cartHandle={cartHandle}/>
            <Pay/>
            <Footer/>
        </div>
    )
}
