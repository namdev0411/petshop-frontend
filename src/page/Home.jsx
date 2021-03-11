import React from 'react'
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import Categories from '../components/Categories';
import ListPets from '../components/ListPets';
import Offer from '../components/Offer';
import Footer from '../components/Footer';
import Pay from '../components/Pay';

export default function Home({data}) {
    return (
        <div>
            <Header/>
            <Categories categories={data.categories}/>
            <ContentTitle title="Feature"/>
            <ListPets listPets={data.listPets}/>
            <Offer offer={data.offer}/>
            <Pay/>
            <Footer/>
        </div>
    )
}
