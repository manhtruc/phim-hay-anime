import React from 'react';
import Column from '../components/ui/Column';
import Row from '../components/ui/Row';
import logo from '../assets/img/logo.png'

const Footer = () => {

    const renderDate = () => {
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const date = new Date().getDate()
        return `${date}/${month}/${year}`
    }
    return (
        <footer className="footer">
            <div className="page-up">
                <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up" /></a>
            </div>
            <div className="container">
                <Row>
                    <Column size={3}>
                        <div className="footer__logo">
                            <a><img src={logo} alt="" /></a>
                        </div>
                    </Column>
                    <Column size={6}>
                        <div className="footer__nav">
                            <ul>
                                <li className="active"><a href="./index.html">Homepage</a></li>
                                <li><a >Categories</a></li>
                                <li><a >Our Blog</a></li>
                                <li><a >Contacts</a></li>
                            </ul>
                        </div>
                    </Column>
                    <Column size={3}>
                        <p>
                            {`Copyright © ${renderDate()}
                            All rights reserved | This template
                            is made with `}
                            <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </Column>
                </Row>
            </div>
        </footer>

    );
};

export default Footer;