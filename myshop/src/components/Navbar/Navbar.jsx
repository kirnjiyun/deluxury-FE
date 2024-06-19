// src/components/Navbar.jsx
import React from "react";
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
    UnderBar,
    MainMenu,
    MenuItem,
} from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = ({ user, isLoggedIn, onLogout, onLogin }) => {
    return (
        <NavbarContainer>
            <TopBar>
                <Link to="/">
                    <Logo>Deluxury</Logo>
                </Link>
                <UserOptions>
                    {isLoggedIn ? (
                        <>
                            <Link to="/mypage">
                                <FontAwesomeIcon icon={faUser} /> {user.name}
                                님의 MY PAGE
                            </Link>
                            <Link to="/mylike">
                                <FontAwesomeIcon icon={faHeart} /> MY LIKE
                            </Link>
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faShoppingBag} />{" "}
                                SHOPPING BAG
                            </Link>
                            <Link to="/" onClick={onLogout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={onLogin}>
                                <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
                            </Link>
                            <Link to="/signup">
                                <FontAwesomeIcon icon={faUserPlus} /> SIGNUP
                            </Link>
                        </>
                    )}
                </UserOptions>
            </TopBar>
            <UnderBar>
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
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
            </UnderBar>
        </NavbarContainer>
    );
};

export default Navbar;
