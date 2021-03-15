import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner_body">
                <h2 className="banner_body--title">
                    いつも、どこもそばに
                </h2>
                <p className="banner_body--text">
                    ペット買うならPet Shop に
                </p>
                <div className="banner_body--btn btn">
                    <Link to="/shop">直ぐに見ます&nbsp;→</Link>
                </div>
            </div>
            <div className="banner_image">
                <img src="/images/dog-banner.png" alt="banner-img"/>
            </div>
        </div>
    )
}
