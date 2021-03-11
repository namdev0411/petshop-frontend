import React from 'react'
import Home from './page/Home';
import {Redirect, Route,Switch} from 'react-router-dom';

export default function App() {
    const data = [
        {
            name: "dog1",
            price: 100000,
            url: "https://aller-petfood.com/wp-content/uploads/2016/08/spot-white-puppy.jpg"
        },
        {
            name: "dog2",
            price: 140000,
            url: "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/dog-pet.jpg?itok=SDt4Pqx7"
        },
        {
            name: "dog3",
            price: 123444,
            url: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
        },
        {
            name: "dog4",
            price: 200000,
            url: "https://www.dogdept.jp/pic-labo/21ss_category_dogwear.jpg"
        }
    ]
    const categories = [
        {
            name: "dog1",
            price: 100000,
            url: "https://www.healthypawspetinsurance.com/Images/V3/HomePage/Healthy-Paws-Pet-Insurance_Autumn.jpg"
        },
        {
            name: "dog2",
            price: 140000,
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
        },
        {
            name: "dog3",
            price: 123444,
            url: "https://www.healthypawspetinsurance.com/Images/V3/HomePage/Healthy-Paws-Product-Overview_Autumn.jpg"
        }
    ]
    const offer = {
        name: "Offer",
        price: 23000,
        url: "https://k4h3w8q3.rocketcdn.me/wp-content/uploads/2021/01/frenchbulldog-hero02.png"
    }
    return (
        <div>
            <Switch>
                <Route path="/home">
                    <Home data={{
                        listPets: data,
                        categories,
                        offer
                    }}/>
                </Route>
                <Redirect from="/" to="/home"/>
            </Switch>
        </div>
    )
}
