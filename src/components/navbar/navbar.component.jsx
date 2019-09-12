import React from 'react';

import './navbar.styles.css';

class NavBar extends React.Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <div className="nav" aria-label="Main navigation" role="navigation">

                <div className="nav__inner" role="navigation">

                    <div className="nav__logo-container">
                        <a 
                            className="nav__logo-wrap"
                            href="/"
                            target="_self"
                            rel=" noopener noreferrer"
                        >
                            <img 
                                className="udemy-logo"
                                src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                                alt="Udemy"
                                width="110"
                                height="32"
                            />
                        </a>
                    </div>

                    <div className="nav__left">
                        <div className="ud-component--header-v6--browse-dropdown-button hidden-xs hidden-xxs">
                            <div className="dropdown--open-on-hover dropdown--topics dropdown--open-on-hover dropdown">
                                <a   href="javascript:void(0)" id="nav.browse" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    <span className="udi udi-explore"></span>
                                    <span> Categories</span>
                                </a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="header.browse">
                                    <li className="h100p">
                                        <ul className="dropdown-menu__list dropdown-menu__list--level-one" role="dialog" aria-label="Categories">
                                            <li className="menu__link" data-purpose="ver-development" role="presentation">
                                                <a href="/courses/development/" aria-expanded="false" role="button" target="_self">
                                                    <span data-purpose="menu-icon" class="menu__icon udi udi-development"></span>
                                                    <span class="fx">Development</span>
                                                    <span data-purpose="menu-item-arrow" class="menu__arrow udi udi-next"></span>
                                                </a>
                                            </li>
                                            <li className="menu__link" data-purpose="ver-business" role="presentation">
                                                <a href="/courses/business/" aria-expanded="false" role="button" target="_self">
                                                    <span data-purpose="menu-icon" class="menu__icon udi udi-Business"></span>
                                                    <span class="fx">Business</span>
                                                    <span data-purpose="menu-item-arrow" class="menu__arrow udi udi-next"></span>
                                                </a>
                                            </li>
                                            <li className="menu__link" data-purpose="ver-finance-and-accounting" role="presentation">
                                                <a href="/courses/finance-and-accounting/" aria-expanded="false" role="button" target="_self">
                                                    <span data-purpose="menu-icon" class="menu__icon udi udi-finance"></span>
                                                    <span class="fx">Finance & Accounting</span>
                                                    <span data-purpose="menu-item-arrow" class="menu__arrow udi udi-next"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;