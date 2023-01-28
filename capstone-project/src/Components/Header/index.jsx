import {React, useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import MainLogo from "../../assets/images/Logos/Logo1.png";
import User from "../../assets/images/Icons/user.png";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { ROUTE_NAMES } from "../../Routes";

export default function Header() {
    const [activeBar, setActiveBar] = useState(true);
    const [stickyNav, setStickyNav] = useState('');
    const [hideNav, setHideNav] = useState(false);
    const prevScrollPos = useRef(0);
  
    useEffect(() => {
        function handleScroll() {
          const currentScrollPos = window.pageYOffset;
          if (currentScrollPos > prevScrollPos.current) {
            setStickyNav('');
            setHideNav(true);
          } else {
            setStickyNav('sticky');
            setHideNav(false);
          }
          prevScrollPos.current = currentScrollPos;
          setTimeout(() => {
            
          }, 500)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleBar = () => {
        setActiveBar(!activeBar);
    }

    return (
        <>
            <nav className={`${stickyNav} ${hideNav ? "hide" : ""}`}>
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
                            <NavLink to={ROUTE_NAMES.MOVIES} className="navItem" end>
                                <span data-text="MOVIES">
                                </span>Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.TV_SHOWS} className="navItem" end>
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
                        <input type="text" id="searchMovie" placeholder="Search Movie"/>
                        <button type="submit" id="search-btn"><FaSearch id="searchIcon"/></button>
                        <div className="userBox">
                            <img src={User} alt="userPic" className="user"/>
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