import React from 'react';
import './Offer.scss';
export default function Offer({offer}) {
    return (
        <div className="offer">
            <div className="offer__image">
                <img  src={offer.url} alt={offer.name}/>
            </div>
            <div className="offer__info">
                <p className="offer__info__description">
                    今買うのがお得です。
                </p>
                <h2 className="offer__info__title">
                    {offer.name}
                </h2>
                <p className="offer__info__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Adipisci hic cumque minus magni provident esse, sapiente, 
                    laudantium labore dignissimos, modi ducimus placeat odio nostrum? 
                    Ex libero ratione iure rerum dolorem.
                </p>
                <div className="btn offer__btn">
                    直ぐに買う&nbsp;→
                </div>
            </div>
        </div>
    )
}
