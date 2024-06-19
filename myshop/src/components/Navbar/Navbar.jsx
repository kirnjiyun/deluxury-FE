// src/components/Navbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faHeart,
    faShoppingBag,
    faSignInAlt,
    faSignOutAlt,
    faSearch,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
    NavbarContainer,
    TopBar,
    Logo,
    UserOptions,
    SearchIcon,
    MainMenu,
    MenuItem,
    SubMenu,
} from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = ({ user, isLoggedIn, onLogout, onLogin }) => {
    return (
        <NavbarContainer>
            <TopBar>
                <Logo>Deluxury</Logo>
                <UserOptions>
                    {isLoggedIn ? (
                        <>
                            <Link to="/mypage">
                                <FontAwesomeIcon icon={faUser} /> MY PAGE
                            </Link>
                            <Link to="/mylike">
                                <FontAwesomeIcon icon={faHeart} /> MY LIKE
                            </Link>
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faShoppingBag} />{" "}
                                SHOPPING BAG
                            </Link>
                            <Link to="/" onClick={onLogout}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                LOGOUT
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={onLogin}>
                                <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
                            </Link>
                            <Link to="/signup">
                                <FontAwesomeIcon icon={faUserPlus} />
                                SIGNUP
                            </Link>
                        </>
                    )}
                    <SearchIcon>
                        <FontAwesomeIcon icon={faSearch} />
                    </SearchIcon>
                </UserOptions>
            </TopBar>
            <MainMenu>
                <MenuItem href="#">MEN</MenuItem>
                <MenuItem href="#">WOMEN</MenuItem>
                <MenuItem href="#">KIDS</MenuItem>
                <MenuItem href="#">INTERIOR</MenuItem>
                <MenuItem href="#">KITCHEN</MenuItem>
                <MenuItem href="#">ELECTRONICS</MenuItem>
                <MenuItem href="#">DIGITAL</MenuItem>
                <MenuItem href="#">BEAUTY</MenuItem>
                <MenuItem href="#">LEISURE</MenuItem>
            </MainMenu>
        </NavbarContainer>
    );
};

export default Navbar;
