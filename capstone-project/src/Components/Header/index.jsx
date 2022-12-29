import React from "react";
import { useState } from "react";
import "./style.css";
import MainLogo from "../../assets/images/Logo1.png";
import User from "../../assets/images/user.png";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Header() {
    const [activeBar1, setActiveBar1] = useState(true);
    const [activeBar2, setActiveBar2] = useState(true);

    const handleBar1 = () => {
        setActiveBar1(!activeBar1);
    }

    const handleBar2 = () => {
        setActiveBar2(!activeBar2);
    }

    return (
        <>
            <nav>
                <a href="#"><img src={MainLogo} alt="MainLogog" id="mainLogo" /></a>
                <div>
                    <ul id="navbar" className={!activeBar1 ? "activeMenu": null}>
                        <li>
                            <a href="#" className="navItem">
                                <span data-text="HOME">
                                </span>Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navItem">
                                <span data-text="MOVIES">
                                </span>Movies
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navItem">
                                <span data-text="TV SHOWS">
                                </span>TV Shows
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navItem">
                                <span data-text="FAN PAGE">
                                </span>Fan Page
                            </a>
                        </li>
                        <li className="pages">
                            <a href="#" className="navItem">
                                <span data-text="PAGES">
                                </span>Pages
                            </a>
                            <div id="dropdownMenu">
                                <li><a href="#" className="navItem"><span data-text="ABOUT US">
                                </span>About Us</a></li>
                                <li><a href="#" className="navItem"><span data-text="FAQ">
                                </span>FAQ</a></li>
                                <li><a href="#" className="navItem"><span data-text="PRIVACY POLICY">
                                </span>Privacy Policy</a></li>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="searchAndUser" className={!activeBar1 ? "activeMenu": null}>
                    <div id="searchAndUserBox">
                        <input type="text" id="searchMovie" placeholder="Search Movie"/>
                        <button type="submit" id="search-btn"><FaSearch id="searchIcon"/></button>
                        <img src={User} alt="userPic" className="user"/>
                    </div>
                </div>
                <div id="mobile">
                    {activeBar1 ? <FaBars className="bars" onClick={handleBar1}/>: <FaTimes className="close" onClick={handleBar1}/>}
                </div>
            </nav>
        </>
    )
}