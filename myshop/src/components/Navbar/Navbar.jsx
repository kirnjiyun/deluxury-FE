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
    Column,
    DropdownContent,
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
                    <MenuItem>
                        <a href="#">MEN</a>
                        <DropdownContent className="dropdown-content">
                            <Column>
                                <h3>의류</h3>
                                <a href="#">ALL</a>
                                <a href="#">NEW</a>
                                <a href="#">EXCLUSIVE</a>
                                <a href="#">해외브랜드</a>
                                <a href="#">아우터</a>
                                <a href="#">상의</a>
                                <a href="#">하의</a>
                                <a href="#">셋업</a>
                                <a href="#">홈웨어</a>
                                <a href="#">이너웨어</a>
                            </Column>
                            <Column>
                                <h3>가방</h3>
                                <a href="#">ALL</a>
                                <a href="#">NEW</a>
                                <a href="#">EXCLUSIVE</a>
                                <a href="#">해외브랜드</a>
                                <a href="#">크로스백</a>
                                <a href="#">웨이스트백</a>
                                <a href="#">토트백</a>
                                <a href="#">백팩</a>
                                <a href="#">솔더백</a>
                                <a href="#">랩탑백</a>
                            </Column>
                            <Column>
                                <h3>신발</h3>
                                <a href="#">ALL</a>
                                <a href="#">NEW</a>
                                <a href="#">EXCLUSIVE</a>
                                <a href="#">해외브랜드</a>
                                <a href="#">스니커즈</a>
                                <a href="#">로퍼</a>
                                <a href="#">구두</a>
                                <a href="#">부츠</a>
                                <a href="#">샌들</a>
                                <a href="#">슈즈 액세서리</a>
                            </Column>
                            <Column>
                                <h3>액세서리</h3>
                                <a href="#">ALL</a>
                                <a href="#">NEW</a>
                                <a href="#">EXCLUSIVE</a>
                                <a href="#">지갑,카드케이스</a>
                                <a href="#">해외브랜드</a>
                                <a href="#">모자</a>
                                <a href="#">시계</a>
                                <a href="#">아이웨어</a>
                                <a href="#">넥타이</a>
                                <a href="#">벨트</a>
                            </Column>
                        </DropdownContent>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">WOMEN</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">KIDS</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">INTERIOR</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">KITCHEN</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">ELECTRONICS</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">DIGITAL</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">BEAUTY</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#">LEISURE</a>
                    </MenuItem>
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
