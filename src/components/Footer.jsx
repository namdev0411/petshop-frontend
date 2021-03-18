import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="footer__logo">
                    <img src="/images/logo.png" alt="logo" className="footer__logo__image"/>
                </div>
                <div className="footer__follow">
                    <h3 className="fotter__follow__title">
                        Follow us
                    </h3>
                    <ul className="footer__follow__list">
                        <li className="footer__follow__list__item">
                            <a href="https://www.facebook.com/nam.cool.773">
                                <i className=" footer__icon fab fa-facebook"></i>Facebook
                            </a>
                        </li>
                        <li className="footer__follow__list__item">
                            <a href="https://www.instagram.com/namdev0411/">
                                <i className=" footer__icon fab fa-instagram"></i>Instagram
                            </a>
                        </li>
                        <li className="footer__follow__list__item">
                            <a href="https://github.com/namdev0411">
                                <i className=" footer__icon fab fa-github"></i>Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="copyright">
                <p className="copyright__text">Copyright 2021 -- Namdev0411</p>
            </div>
        </div>
    )
}
