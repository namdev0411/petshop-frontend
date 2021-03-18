import React, { useState } from 'react'
import Home from './page/Home';
import {Redirect, Route,Switch} from 'react-router-dom';
import Shop from './page/Shop';
import Details from './page/Details';
import Cart from './page/Cart';
import cartActionType from './Action/CartActionType';

export default function App() {
    const [cart, setcart] = useState([{
    pet:{ id: "1",
    name: "dog1",
    price: 100000,
    url: "https://aller-petfood.com/wp-content/uploads/2016/08/spot-white-puppy.jpg"},count: 2},
    {
        pet:{
            id: 3,
            name: "dog3",
            price: 123444,
            url: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" 
        },
        count: 5
    },
    {
        pet:{
            id: 3,
            name: "dog3",
            price: 123444,
            url: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" 
        },
        count: 5
    }
]);
    const data = [
        {
            id: "1",
            name: "dog1",
            price: 100000,
            url: "https://aller-petfood.com/wp-content/uploads/2016/08/spot-white-puppy.jpg"
        },
        {
            id: 2,
            name: "dog2",
            price: 140000,
            url: "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/dog-pet.jpg?itok=SDt4Pqx7"
        },
        {
            id: 3,
            name: "dog3",
            price: 123444,
            url: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
        },
        {
            id: 4,
            name: "dog4",
            price: 200000,
            url: "https://www.dogdept.jp/pic-labo/21ss_category_dogwear.jpg"
        },{
            id: 5,
            name: "dog5",
            price: 100000,
            url: "https://aller-petfood.com/wp-content/uploads/2016/08/spot-white-puppy.jpg"
        },
        {
            id: 6,
            name: "dog6",
            price: 140000,
            url: "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/dog-pet.jpg?itok=SDt4Pqx7"
        },
        {
            id: 7,
            name: "dog7",
            price: 123444,
            url: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
        },
        {
            id: 8,
            name: "dog8",
            price: 200000,
            url: "https://www.dogdept.jp/pic-labo/21ss_category_dogwear.jpg"
        },
    ];
    const categories = [
        {
            id: 1,
            name: "dog1",
            price: 100000,
            url: "https://www.healthypawspetinsurance.com/Images/V3/HomePage/Healthy-Paws-Pet-Insurance_Autumn.jpg"
        },
        {
            id: 2,
            name: "dog2",
            price: 140000,
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
        },
        {
            id: 3,
            name: "dog3",
            price: 123444,
            url: "https://www.healthypawspetinsurance.com/Images/V3/HomePage/Healthy-Paws-Product-Overview_Autumn.jpg"
        }
    ]
    const offer = {
        id: 56,
        name: "Offer",
        price: 23000,
        url: "https://k4h3w8q3.rocketcdn.me/wp-content/uploads/2021/01/frenchbulldog-hero02.png"
    }
    const cartHandle = (type,data)=>{
        switch(type){
            case cartActionType.ADD:{
                setcart([...cart,data]);
                break;
            }
            case cartActionType.DELETE:{
                const petIndex = cart.find(item=>String(item.id) === String(data.pet.id));
                const newCart = cart.slice(petIndex,1);
                setcart(newCart);
                break;
            }
        }
    }
    return (
        <div>
            <Switch>
                <Route path="/home" exact>
                    <Home data={{
                        listPets: data,
                        categories,
                        offer,
                        cartHandle
                    }}/>
                </Route>
                <Route path="/shop" exact>
                    <Shop
                        data={{
                            allpets: data,
                            cartHandle
                        }}
                    />
                </Route>
                <Route path="/detail/:id" exact>
                    <Details
                        data={{
                            allpets:data,
                            offer,
                            cartHandle
                        }}
                    />
                </Route>
                <Route path="/cart">
                    <Cart cart={cart} setcart={setcart}/>
                </Route>
                <Redirect from="/" to="/home"/> 
            </Switch>
        </div>
    )
}
