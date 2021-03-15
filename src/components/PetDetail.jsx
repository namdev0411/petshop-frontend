import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './PetDetail.scss'
export default function PetDetail({allpets}) {
    const [pet, setpet] = useState({});
    const {id} = useParams();
    useEffect(() => {
       const petView =  allpets.find(pet=>pet.id = id);
       setpet(petView);
    });
    return (
            <div className="pet__detail">
                {
            pet &&  (<>
                        <div className="pet__detail__image">
                            <img src={pet.url} alt="pet.name"/>
                        </div>
                        <div className="pet__detail__content">
                            <p>Shop/Dog</p>
                            <h1>{pet.name}</h1>
                            <p>{pet.price}円</p>
                            <div className="add__btn btn">
                                <div>直ぐに見ます&nbsp;→</div>
                            </div>
                            <h3>Pet Detail</h3>
                            <p>pet.description
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Molestias soluta alias nam perferendis quos error saepe fuga,
                              optio maiores, quidem consequuntur quibusdam tempore atque 
                              sunt eius quod facere vero qui.</p>
                        </div>
                    </>
                    )
                }
            </div>
    )
}
