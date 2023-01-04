import {React, useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import MainLogo from "../../assets/images/Logo1.png";
import User from "../../assets/images/user.png";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Header() {
    const [activeBar, setActiveBar] = useState(true);
    const [stickyNav, setStickyNav] = useState('');
    const prevScrollPos = useRef(0);
  
    useEffect(() => {
        function handleScroll() {
          const currentScrollPos = window.pageYOffset;
          if (currentScrollPos > prevScrollPos.current) {
            setStickyNav('');
          } else {
            setStickyNav('sticky');
          }
          prevScrollPos.current = currentScrollPos;
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
            <nav className={stickyNav}>
                <NavLink to="/" end><img src={MainLogo} alt="MainLogo" id="mainLogo" /></NavLink>
                <div>
                    <ul id="navbar" className={!activeBar ? "activeMenu": null}>
                        <li>
                            <NavLink to="/" className="navItem" end>
                                <span data-text="HOME">
                                </span>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" className="navItem" end>
                                <span data-text="MOVIES">
                                </span>Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv-shows" className="navItem" end>
                                <span data-text="TV SHOWS">
                                </span>TV Shows
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/fan-page" className="navItem" end>
                                <span data-text="FAN PAGE">
                                </span>Fan Page
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
                                        <NavLink to="/about" className="navItem" end>
                                            <span data-text="ABOUT US">
                                            </span>About Us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faq" className="navItem" end>
                                            <span data-text="FAQ">
                                            </span>FAQ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/privacy-policy" className="navItem" end>
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
                        <img src={User} alt="userPic" className="user"/>
                    </div>
                </div>
                <div id="mobile">
                    {activeBar ? <FaBars className="bars" onClick={handleBar}/>: <FaTimes className="close" onClick={handleBar}/>}
                </div>
            </nav>
        </>
    )
}