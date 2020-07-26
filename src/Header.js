import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            {/* Logo on left  img*/}
            <Link to="/">
                <img  className="header__logo" 
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="Logo"/>
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick ={login} className="header__option">
                        <span className="header__optionOne">Hello {user?.email}</span>
                        <span className="header__optionTwo">{user ? 'Sign Out' : 'Sign In' }</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Returns</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Your</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>
                {/*Basket icon with number */}
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        {/* Icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items */}
                        <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
