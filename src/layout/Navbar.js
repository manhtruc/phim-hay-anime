import React from 'react';
import logo from '../assets/img/logo.png'
import Column from '../components/ui/Column';
import Row from '../components/ui/Row';

const listSubMenu = ['Categories', 'Anime Details', 'Anime Watching', 'Blog Details', 'Sign Up', 'Login']

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <Row>
                    <Column size={2}>
                        <div className="header__logo">
                            <a>
                                <img src={logo} alt="Anime" />
                            </a>
                        </div>
                    </Column>
                    <Column size={8}>
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li><a href >Homepage</a></li>
                                    <li><a href >Categories <span className="arrow_carrot-down" /></a>
                                        <ul className="dropdown">
                                            {listSubMenu.map((list, index) => (
                                                <li key={index}><a>{list}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li><a href >Our Blog</a></li>
                                    <li><a href >Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                    </Column>
                    <Column size={2}>
                        <div className="header__right">
                            <a href className="search-switch"><span className="icon_search" /></a>
                            <a href ><span className="icon_profile" /></a>
                        </div>
                    </Column>
                </Row>
            </div>
        </header>
    );
};

export default Navbar;