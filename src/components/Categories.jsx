import React from 'react';
import './Categories.scss';
export default function Categories({categories}) {
    return (
        <div className="categories">
            {
                categories.map((item,index)=>
                <div className="categories__item" key={index}>
                    <img className="categories__image" src={item.url} alt={item.name}/>
                </div>
                    
                )
            }
        </div>
    )
}
