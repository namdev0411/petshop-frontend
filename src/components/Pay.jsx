import React from 'react';
import './Pay.scss';

export default function Pay() {
    return (
        <div className="pay">
            <div className="pay__item">
                <i className="fab fa-cc-visa"></i>
            </div>
            <div className="pay__item">
                <i className="fab fa-cc-paypal"></i>
            </div>
            <div className="pay__item">
                <i className="fab fa-cc-jcb"></i>
            </div>
        </div>
    )
}
