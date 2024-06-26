import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast, { notify } from "../Toast/Toast";
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
    Column,
    DropdownContent,
} from "./NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../action/userAction";
import { openSearchModal, closeSearchModal } from "../../action/modalAction";
import SearchModal from "../searchModal/SearchModal";
import { menuItems } from "./menuItems";
import { setCategories } from "../../action/categoryAction";

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

    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef([]);

    const toggleDropdown = (index) => {
        if (index > 1) {
            notify("업데이트 예정입니다.");
        } else {
            setOpenDropdown((prevIndex) =>
                prevIndex === index ? null : index
            );
        }
        const category = menuItems[index]?.label;
        if (category) {
            dispatch(setCategories(category));
        }
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRefs.current.every(
                (ref) => ref && !ref.contains(event.target)
            )
        ) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <NavbarContainer>
            <TopBar>
                <Link to="/">
                    <Logo>Deluxury</Logo>
                </Link>
                <UserOptions>
                    {isLoggedIn ? (
                        <>
                            <Link
                                to={
                                    user.user.role === "admin"
                                        ? "/admin"
                                        : "/me"
                                }
                            >
                                <FontAwesomeIcon icon={faUser} />{" "}
                                {user.user.role === "admin"
                                    ? "ADMIN PAGE"
                                    : `${user.user.name}'s MY PAGE`}
                            </Link>
                            {user.user.role !== "admin" && (
                                <Link to="/mylike">
                                    <FontAwesomeIcon icon={faHeart} /> MY LIKE
                                </Link>
                            )}
                            {user.user.role !== "admin" && (
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
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => toggleDropdown(index)}
                            isOpen={openDropdown === index}
                            index={index}
                            ref={(el) => (dropdownRefs.current[index] = el)}
                        >
                            <a href="#">{item.label}</a>
                            {openDropdown === index && (
                                <DropdownContent className="dropdown-content">
                                    {item.content}
                                </DropdownContent>
                            )}
                        </MenuItem>
                    ))}
                </MainMenu>
                <Toast />
                <SearchIcon onClick={openModal}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                {isSearchModalOpen && <SearchModal onClose={closeModal} />}
            </UnderBar>
        </NavbarContainer>
    );
};

export default Navbar;
