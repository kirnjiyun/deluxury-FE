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
    faPlay,
    faPause,
    faStepBackward,
    faStepForward,
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
    SliderContainer,
    SliderText,
} from "./NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../action/userAction";
import { openSearchModal, closeSearchModal } from "../../action/modalAction";
import SearchModal from "../searchModal/SearchModal";
import { menuItems } from "./menuItems";
import { setCategories } from "../../action/categoryAction";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        navigate("/");
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

    const tracks = [
        {
            title: "Track 1",
            src: require("../../asset/music/funky-jazz-big-band-piece-225127.mp3"),
        },
        {
            title: "Track 2",
            src: require("../../asset/music/the-best-jazz-club-in-new-orleans-164472.mp3"),
        },
        {
            title: "Track 3",
            src: require("../../asset/music/crosstown-funk-205896.mp3"),
        },
        {
            title: "Track 4",
            src: require("../../asset/music/pop-groove-226858.mp3"),
        },
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(tracks[currentTrackIndex].src));

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const playPreviousTrack = () => {
        const newIndex =
            currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
        setCurrentTrackIndex(newIndex);
        setIsPlaying(true);
    };

    const playNextTrack = () => {
        const newIndex =
            currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;
        setCurrentTrackIndex(newIndex);
        setIsPlaying(true);
    };

    useEffect(() => {
        const handleTrackEnd = () => {
            playNextTrack();
        };

        if (audioRef.current) {
            audioRef.current.src = tracks[currentTrackIndex].src;
            if (isPlaying) {
                audioRef.current.play();
            }

            audioRef.current.addEventListener("ended", handleTrackEnd);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("ended", handleTrackEnd);
            }
        };
    }, [currentTrackIndex, isPlaying]);

    return (
        <NavbarContainer>
            <TopBar>
                <Logo onClick={() => navigate("/")}>Deluxury</Logo> <Toast />
                <UserOptions>
                    {isLoggedIn ? (
                        <>
                            {" "}
                            <div
                                onClick={() =>
                                    navigate(
                                        user.user.role === "admin"
                                            ? "/admin"
                                            : "/me"
                                    )
                                }
                            >
                                <FontAwesomeIcon icon={faUser} />{" "}
                                {user.user.role === "admin"
                                    ? "ADMIN PAGE"
                                    : `${user.user.name}'s MY PAGE`}
                            </div>
                            {user.user.role !== "admin" && (
                                <div onClick={() => navigate("/mylike")}>
                                    <FontAwesomeIcon icon={faHeart} /> MY LIKE
                                </div>
                            )}
                            {user.user.role !== "admin" && (
                                <div onClick={() => navigate("/cart")}>
                                    <FontAwesomeIcon icon={faShoppingBag} />{" "}
                                    SHOPPING BAG
                                </div>
                            )}
                            <div onClick={handleLogout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                            </div>
                        </>
                    ) : (
                        <>
                            <div onClick={() => navigate("/login")}>
                                <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
                            </div>
                            <div onClick={() => navigate("/signup")}>
                                <FontAwesomeIcon icon={faUserPlus} /> SIGNUP
                            </div>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <SliderContainer>
                        <SliderText>
                            🎶 즐거운 쇼핑을 위해 BGM을 틀어보세요
                        </SliderText>
                    </SliderContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon
                            icon={faStepBackward}
                            onClick={playPreviousTrack}
                            style={{ cursor: "pointer", marginRight: "10px" }}
                        />
                        <FontAwesomeIcon
                            icon={isPlaying ? faPause : faPlay}
                            onClick={togglePlay}
                            style={{ cursor: "pointer", marginRight: "10px" }}
                        />
                        <FontAwesomeIcon
                            icon={faStepForward}
                            onClick={playNextTrack}
                            style={{ cursor: "pointer", marginRight: "20px" }}
                        />
                    </div>{" "}
                </div>
                <SearchIcon onClick={openModal}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                {isSearchModalOpen && <SearchModal onClose={closeModal} />}
            </UnderBar>
        </NavbarContainer>
    );
};

export default Navbar;
