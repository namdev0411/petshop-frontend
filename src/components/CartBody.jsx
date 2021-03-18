import React, { useEffect, useState } from 'react';
import './CartBody.scss';
import Pagination from './Pagination';

export default function CartBody({cart,setcart}) {
    const [subtotal, setsubtotal] = useState(0);
    const [tax, settax] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const taxPercent = 0.1;
        let newsubtotal = 0;
        cart.forEach(item => {
            const {price} = item.pet;
            const {count} = item;
            newsubtotal+=(price*count);
        });
        const newtax = newsubtotal*taxPercent;
        const newtotal=newsubtotal + newtax;
        settotal(newtotal);
        setsubtotal(newsubtotal);
        settax(newtax); 
    }, [cart]);
    const onChangeCount = (id,e)=>{
        const {value} = e.target;
        if(parseInt(value)>=1&&parseInt(value)<=20){
            const cartIndex = cart.findIndex(item=>
            String(item.pet.id) === String(id));
            if(cartIndex>=0){
                const newCartItem = {...cart[cartIndex],count:value};
                const newCart = [...cart];
                newCart[cartIndex] = newCartItem;
                setcart(newCart);
            }
        }
    }
    return (
        <div className="cart__body container">
            <div className="table">
                <div className="table__head">
                    <div className="table__head__product">商品</div>
                    <div className="table__head__count">量</div>
                    <div className="table__head__sum">合計</div>
                </div>
                <div className="table__body">
                    {
                        cart.map((item,index)=>
                            <div key={index} className="table__body__row">
                                <div className="table__body__item">
                                    <div className="table__body__item__image" 
                                    style={{background: `url(${item.pet.url})`,backgroundSize: "cover",backgroundPosition: "center"}}></div>
                                    <div className="table__body__item__detail">
                                        <div className="table__body__item__name">{item.pet.name}</div>
                                        <p className="table__body__item__price">Price:&nbsp;¥{item.pet.price}</p>
                                        <div className="table__body__item__btn">Remove</div>
                                    </div>
                                </div>
                                <div className="table__body__item__count">
                                    <input 
                                        value={item.count}
                                        type="number"
                                        onChange={(e)=>onChangeCount(item.pet.id,e)}
                                    />
                                </div>
                                <div className="table__body__item__sum">{item.count*item.pet.price}</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Pagination allPage={5}/>
            <div className="order">
                <div className="order__space"></div>
                <div className="order__content">
                    <div className="order__content__body">
                        <div className="subtotal">
                            <h4>
                                合計（税抜き）
                            </h4>
                            <h4>
                                ¥{subtotal}
                            </h4>
                        </div>
                        <div className="tax">
                            <h4>
                                税
                            </h4>
                            <h4>
                            ¥{tax}
                            </h4>
                        </div>
                        <div className="total">
                            <h4>
                                合計
                            </h4>
                            <h4>
                            ¥{total}
                            </h4>
                        </div>
                        <div className="btn-primary btn__checkout">
                            決済&nbsp;→
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
