import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './PetDetail.scss'
export default function PetDetail({allpets,offer}) {
    const [pet, setpet] = useState({});
    const [count, setcount] = useState(1);
    const {id} = useParams();
    useEffect(() => {
        if(id==="offer"){
            setpet(offer);
        }else{
            const petView =  allpets.find(pet=>String(pet.id) === String(id));
            setpet(petView);
        }
    });

    const onChangeCount = (e)=>{
        const {value} = e.target;
        if(value<1){
            setcount(1);
        }else if(value>20){
            setcount(20)
        }else setcount(e.target.value)
    }
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
                            <input 
                                type="number" 
                                className="pet__count"
                                value={count}
                                onChange={onChangeCount}
                            />
                            <div className="add__btn btn">
                                <div>Add to cart&nbsp;→</div>
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
