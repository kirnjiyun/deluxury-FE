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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../action/userAction";
import { openSearchModal, closeSearchModal } from "../../action/modalAction";
import SearchModal from "../searchModal/SearchModal";
const Navbar = () => {
    const dispatch = useDispatch();
    const isSearchModalOpen = useSelector(
        (state) => state.modal.isSearchModalOpen
    );
    const openModal = () => {
        dispatch(openSearchModal());
    };
    const closeModal = () => {
        dispatch(closeSearchModal());
    };
    const { isLoggedIn, user } = useSelector((state) => state.user);
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <NavbarContainer>
            <TopBar>
                <Link to="/">
                    <Logo>Deluxury</Logo>
                </Link>
                <UserOptions>
                    {isLoggedIn ? (
                        <>
                            <Link to={user.role === "admin" ? "/admin" : "/me"}>
                                <FontAwesomeIcon icon={faUser} />{" "}
                                {user.role === "admin"
                                    ? "ADMIN PAGE"
                                    : `${user.name}님의 MY PAGE`}
                            </Link>
                            {user.role !== "admin" && (
                                <Link to="/mylike">
                                    <FontAwesomeIcon icon={faHeart} /> MY LIKE
                                </Link>
                            )}
                            {user.role !== "admin" && (
                                <Link to="/cart">
                                    <FontAwesomeIcon icon={faShoppingBag} />{" "}
                                    SHOPPING BAG
                                </Link>
                            )}
                            <Link to="/" onClick={handleLogout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
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
                <SearchIcon onClick={openModal}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                {isSearchModalOpen && <SearchModal onClose={closeModal} />}
            </UnderBar>
        </NavbarContainer>
    );
};

export default Navbar;
