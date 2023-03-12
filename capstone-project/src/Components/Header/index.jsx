import {React, useState, useEffect, useRef} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import "./style.css";
import { useGlobalContext } from "../../Context/Context";
import MainLogo from "../../assets/images/Logos/Logo1.png";
import User from "../../assets/images/Icons/user.png";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { ROUTE_NAMES } from "../../Routes";

import { searchWatchable } from "../../Platform/Search";
import { getProfileImage } from "../../Platform/ProfileImage";
import { getProfileByEmail } from "../../Platform/Profiles";

import DefaultBackdrop from "../../assets/images/BackgroundImages/DefaultBackdrop.png";

export default function Header() {
    const {avatar, setAvatar, showProfile, setShowProfile} = useGlobalContext();
    const [activeBar, setActiveBar] = useState(true);
    const [hideNav, setHideNav] = useState(false);
    const [searchShowcase, setSearchShowcase] = useState([]);
    
    const [profile, setProfile] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const navigate = useNavigate();
    const prevScrollPos = useRef(0);
  
    useEffect(() => {
        document.body.classList.remove('hiddenScroll');
        const token = localStorage.getItem("token");
        if(token) {
            const decodedToken = jwt_decode(token);
            if(decodedToken.sub) {
                setShowProfile(true);
                getProfile(decodedToken.sub, token);
            } else {
                setShowProfile(false);
            }
        }
        function handleScroll() {
          const currentScrollPos = window.pageYOffset;
          if (currentScrollPos > prevScrollPos.current) {
            setHideNav(true);
          } else {
            setHideNav(false);
          }
          prevScrollPos.current = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("id");
        if (token) {
            if(profile) {
                getAvatar(id, token);
            }
        }
    }, [profile, showProfile]);


    const getProfile = async (email, jwt) => {
        try {
            const result = await getProfileByEmail(email, jwt);
            setProfile(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getAvatar = async (profileID, jwt) => {
        try {
            const result = await getProfileImage(profileID, jwt);
            setUserAvatar(`data:${result.data.type};base64,${result.data.imageData}`);
            setAvatar(`data:${result.data.type};base64,${result.data.imageData}`);
        } catch (error) {
            console.log(error);
        }
    };


    const handleBar = () => {
        setActiveBar(!activeBar);
    }

    const handleSearch = () => {
        const searchValue = document.getElementById("searchMovie").value;
        if (searchValue) {
            navigate("/");
            setSearchShowcase([]);
            setTimeout(() => {
                navigate("/movies/searchItem:" + searchValue);
            }, 300);
        }
    }

    const handleSearchShowcase = () => {
        const searchValue = document.getElementById("searchMovie").value;
        if (searchValue) {
            showcaseSearchList(searchValue);
        } else {
            setSearchShowcase([]);
        }
    }

    const showcaseSearchList = async (query) => {
        try {
          const result = await searchWatchable(0, 4, query);
          setSearchShowcase(result.data.content);
        } catch (e) {
            console.log(e);
        }
      };

    const handleSearchWithEnter = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    const handleShowcaseItemNav = (id) => {
        navigate("/");
        setTimeout(() => {
            navigate(ROUTE_NAMES.DEFAULT_PAGE + id);
        }, 50)
    }

    const logOut = () => {
        localStorage.clear();
        setShowProfile(false);
        setAvatar("");
        if (window.location.pathname === "/profile") {
            navigate("/");
        } else {
            window.location.reload();
        }
    }

    return (
        <>
            <nav className={`${hideNav ? "hide" : ""}`}>
                <NavLink to={ROUTE_NAMES.HOME} end><img src={MainLogo} alt="MainLogo" id="mainLogo" /></NavLink>
                <div>
                    <ul id="navbar" className={!activeBar ? "activeMenu": null}>
                        <li>
                            <NavLink to={ROUTE_NAMES.HOME} className="navItem" end>
                                <span data-text="HOME">
                                </span>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.MOVIES + "film"} className="navItem" end>
                                <span data-text="MOVIES">
                                </span>Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.TV_SHOWS + "show"} className="navItem" end>
                                <span data-text="TV SHOWS">
                                </span>TV Shows
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.ABOUT_US} className="navItem" end>
                                <span data-text="ABOUT US">
                                </span>About Us
                            </NavLink>
                        </li>
                        <li className="pages">
                            <NavLink className="navItem" end>
                                <span data-text="PAGES">
                                </span>Pages<FaAngleDown id="dropdownIcon"/>
                            </NavLink>
                            <div id="dropdownMenu">
                                <ul>
                                    <li>
                                        <NavLink to={ROUTE_NAMES.FAN_PAGE} className="navItem" end>
                                            <span data-text="FAN PAGE">
                                            </span>Fan Page
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ROUTE_NAMES.FAQ} className="navItem" end>
                                            <span data-text="FAQ">
                                            </span>FAQ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ROUTE_NAMES.PRIVACY_POLICY} className="navItem" end>
                                            <span data-text="PRIVACY POLICY">
                                            </span>Privacy Policy
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="searchAndUser" className={!activeBar ? "activeMenu": null}>
                    <div id="searchAndUserBox">
                        <div className="searchUserMain">
                            <input onChange={handleSearchShowcase} onKeyDown={handleSearchWithEnter} type="text" id="searchMovie" placeholder="Search Movie"/>
                            <button onClick={handleSearch} type="submit" id="search-btn"><FaSearch id="searchIcon"/></button>
                           {searchShowcase.length > 0 ?
                            <div className="searcShowcase">
                                {searchShowcase.map((elem, index) => {
                                    const shortName = elem.name.length > 25 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 25)) + "..." : elem.name;
                                    const date = new Date(elem.releaseDate);
                                    const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                                    return (
                                        <div onClick={() => handleShowcaseItemNav(elem.id)} className="searchShowcaseItem" key={index}>
                                                {elem.mainBackdropPath ? 
                                                <div className="searchShowcaseItemBackdrop" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${elem.mainBackdropPath})`}}>
                                                </div>: <div className="searchShowcaseItemBackdrop" style={{backgroundImage: `url(${DefaultBackdrop})`}}>
                                                </div>}
                                                <div className="searchShowcaseItemInfo">
                                                    <h2>{shortName}</h2>
                                                    <h4>{dateString}</h4>
                                                </div>
                                        </div>
                                    );
                                })}
                            </div>: null}
                        </div>
                        <div className="userMainBox">
                            <div className="userBox">
                                {avatar ? <img src={avatar} alt="userPic" className="user"/>: userAvatar ? <img src={userAvatar} alt="userPic" className="user"/> : <img src={User} alt="userPic" className="user"/>}
                                <div id="dropdownMenu2">
                                    <ul>
                                        {showProfile ?
                                        <>
                                        <li>
                                            <NavLink to={ROUTE_NAMES.PROFILE_PAGE} className="navItem" end>
                                                <span data-text="PROFILE">
                                                </span>Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={logOut} to={ROUTE_NAMES.HOME} className="navItem" end>
                                                <span data-text="LOG OUT">
                                                </span>Log Out
                                            </NavLink>
                                        </li>
                                        </>:
                                        <li>
                                            <NavLink to={ROUTE_NAMES.LOGIN_PAGE} className="navItem" end>
                                                <span data-text="LOG IN">
                                                </span>Log In
                                            </NavLink>
                                        </li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile">
                    {activeBar ? <FaBars className="bars" onClick={handleBar}/>: <FaTimes className="close" onClick={handleBar}/>}
                </div>
            </nav>
        </>
    )
}