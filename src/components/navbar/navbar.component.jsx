import React from 'react';

import './navbar.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class NavBar extends React.Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <div className="c_header c_header--v6 c_header--desktop c_header--ia c_header--ia- ud-app-loader ud-app-loaded" aria-label="Main navigation" role="navigation">

                <div className="c_header__inner" role="navigation">

                    <div className="c_header__logo-container">
                        <a 
                            className="c_header__logo-wrap"
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

                    <div className="c_header__left">
                        <div className="ud-component--header-v6--browse-dropdown-button hidden-xs hidden-xxs">
                            <div className="dropdown--open-on-hover dropdown--topics dropdown--open-on-hover dropdown">
                                <a href="javascript:void(0)" id="header.browse" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    <span className="udi udi-explore"></span>
                                    <span><FontAwesomeIcon icon={faTh} /> Categories</span>
                                </a>
                                <ul role="menu" className="dropdown-menu" aria-labelledby="header.browse">
                                    <li className="h100p">
                                        <ul className="dropdown-menu__list dropdown-menu__list--level-one" role="dialog" aria-label="Categories">
                                            <li className="menu__link maintain-hover" data-purpose="ver-development" role="presentation">
                                                <a href="/courses/development/" aria-expanded="false" role="button" target="_self">
                                                    {/* <span data-purpose="menu-icon" className="menu__icon udi udi-development"></span> */}
                                                    <FontAwesomeIcon className="menu__icon udi udi-development" icon={faWindowMaximize} />
                                                    <span className="fx"> Development</span>
                                                    <FontAwesomeIcon className="menu__arrow udi udi-next" icon={faChevronRight} />
                                                    {/* <span data-purpose="menu-item-arrow" className="menu__arrow udi udi-next"></span> */}
                                                </a>
                                            </li>
                                            <li className="menu__link maintain-hover" data-purpose="ver-business" role="presentation">
                                                <a href="/courses/business/" aria-expanded="false" role="button" target="_self">
                                                <FontAwesomeIcon className="menu__icon udi udi-business" icon={faChartBar} />
                                                    <span className="fx"> Business</span>
                                                    <FontAwesomeIcon className="menu__arrow udi udi-next" icon={faChevronRight} />
                                                </a>
                                            </li>
                                            <li className="menu__link maintain-hover" data-purpose="ver-finance-and-accounting" role="presentation">
                                                <a href="/courses/finance-and-accounting/" aria-expanded="false" role="button" target="_self">
                                                <FontAwesomeIcon className="menu__icon udi udi-finance" icon={faWallet} />
                                                    <span className="fx"> Finance & Accounting</span>
                                                    <FontAwesomeIcon className="menu__arrow udi udi-next" icon={faChevronRight} />
                                                </a>
                                            </li>
                                            <li className="menu__link maintain-hover" data-purpose="ver-it-and-software" role="presentation">
                                                <a href="/courses/it-and-software/" aria-expanded="false" role="button" target="_self">
                                                <FontAwesomeIcon className="menu__icon udi udi-it-and-software" icon={faDesktop} />
                                                    <span className="fx"> IT & Software</span>
                                                    <FontAwesomeIcon className="menu__arrow udi udi-next" icon={faChevronRight} />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="c_header__search-wrapper ud-component--header-v6--header-es-autocomplete">
                            <div className="c_header__search">
                                <button aria-label="Search" data-purpose="toggle-search-on-small-screens" type="button" className="c_header__mobile-bt btn btn-link">
                                    <span className="udi udi-search"></span>
                                </button>
                                <div className="c_quick-search__form pos-r">
                                    <div className="dropdown es-autocomplete es-autocomplete--primary">
                                      <form action="/courses/search/">
                                        <input type="hidden" name="src" value="ukw"/>
                                        <label for="header-search-field" className="control-label sr-only">
                                            Search for anything
                                        </label>       
                                        <span className="input-group">
                                            <input data-purpose="search-input" name="q" maxlength="200" size={55} placeholder="Search for anything" autocomplete="off" id="header-search-field" className="form-control" value=""/>
                                            <span className="input-group-btn">
                                                <button aria-label="Search for anything" type="submit" className="btn btn-link">
                                                    <FontAwesomeIcon className="udi udi-search" icon={faSearch} />
                                                    {/* <span className="udi udi-search"></span> */}
                                                </button>
                                            </span>
                                        </span>                                 
                                      </form>
                                      <ul role="menu" className="dropdown-menu"></ul>
                                    </div>
                                    {/* <button aria-label="Close" type="button" class="c_header__mobile-close-bt btn btn-quintinary">
                                        <span class="udi udi-close"></span>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="c_header__right">
                        <div className="ud-component--header-v6--try-ufb-dropdown-button visible-lg-block visible-xl-block" ng-non-bindable>
                            <div className="dropdown--ufb zero-state dropdown--open-on-hover dropdown">
                                <a data-purpose="ufb-link" href="https://business.udemy.com/request-demo/?locale=en_US&amp;ref=ufb_header" rel="noopener noopener" target="_blank" id="header.try-ufb" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Udemy for Business</a>
                                <ul role="menu" className="dropdown-menu dropdown-menu-right" aria-labelledby="header.try-ufb">
                                    <li role="presentation">
                                        <div className="zero-state__detail">
                                            <div>Get your team access to 3,500+ top Udemy courses anytime, anywhere</div>
                                        </div>
                                        <div className="mt-space-sm"><a className="zero-state__cta a11 semibold" href="https://business.udemy.com/request-demo/?locale=en_US&amp;ref=ufb_header" target="_blank" rel="noopener noopener">Try Udemy for Business</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ud-component--header-v6--instructor-dropdown-button visible-lg-block visible-xl-block" ng-non-bindable="">
                            <div className="dropdown--open-on-hover dropdown--instructor zero-state dropdown--open-on-hover dropdown">
                                <a data-purpose="instructor-dropdown" href="/teaching/?ref=teach_header" rel=" noopener noreferrer" target="_self" id="header.instructor" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Teach on Udemy</a>
                                <ul role="menu" className="dropdown-menu dropdown-menu-right" aria-labelledby="header.instructor">
                                    <li role="presentation">
                                        <div className="zero-state__detail">
                                            <div>Turn what you know into an opportunity and reach millions around the world.</div>
                                        </div>
                                        <div className="mt-space-sm">
                                            <a className="zero-state__cta a11 semibold" href="/teaching/?ref=teach_header" target="_self">Learn more</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="shopping-cart">
                            <div className="ud-component--header-v6--cart-dropdown" data-purpose="cart-icon" ng-non-bindable="">
                                <div className="dropdown--icon dropdown--shopping-list dropdown--open-on-hover dropdown">
                                    <a href="/cart/" target="_self" id="header.dropdown.cart" role="button" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                        <div className="fx pos-r text-center">
                                            <span className="sr-only">Shoplist</span>
                                            <FontAwesomeIcon className="dropdown__main-icon udi udi-cart-line" icon={faShoppingCart} />
                                            {/* <span className="dropdown__main-icon udi udi-cart-line"></span> */}
                                        </div>
                                    </a>
                                    <ul role="menu" className="hidden dropdown-menu dropdown-menu-right" aria-labelledby="header.dropdown.cart"></ul>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown--login ud-component--header-v6--login-button hidden-xs hidden-xxs" ng-non-bindable=""><div><button data-purpose="header-login" type="button" className="btn btn-quaternary">Log In</button></div></div>
                        <div className="dropdown dropdown--signup ud-component--header-v6--signup-button hidden-xs hidden-xxs" ng-non-bindable=""><div><button data-purpose="header-signup" type="button" className="btn btn-primary">Sign Up</button></div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;