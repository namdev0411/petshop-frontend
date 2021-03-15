import React from 'react';
import './ListPets.scss';
import {Link} from 'react-router-dom';

export default function ListPets({listPets,getPetDetail}) {
    return (
        <div className="listpets">
            {
                listPets.map((pet,i)=>{
                    return(<Link to={`/detail/${pet.id}`} className="listpets__item" key={i} onClick={()=>getPetDetail(pet)}>
                            <img className="listpets__item__image" src={pet.url} alt={pet.name}/>
                            <div className="listpets__item__info">
                                <h4 className="listpets__item__name">{pet.name}</h4>
                                <div className="listpets__item__ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <p className="listpets__item__price">{pet.price}円</p>
                            </div>
                            <div className="add__cart">
                                <i className="fas fa-cart-plus"></i>
                            </div>
                        </Link>
                    )
                }  
                )
            }
        </div>
    )
}
