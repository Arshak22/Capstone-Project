import React, { useEffect, useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../Context/Context";

import ProfileMoviePagination from "../../Components/ProfileMoviePagination";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Profile() {
    const {setIsLoading} = useGlobalContext();
    const [active, setActive] = useState("Profile");
    const [activeBar, setActiveBar] = useState(true);

    useEffect(() => {
        document.title = "Movie Mavericks: Profile Page";
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    const handleClick = (name) => {
        setActive(name);
    };

    const handleBar = () => {
        setActiveBar(!activeBar);
    };

    return (
        <div className="profileContainer">
            <div className="sideBar">
                <div className="rowspan">
                <h3 className={active === "Profile" ? "activeSideBar" : ""} onClick={() => handleClick("Profile")}>Profile</h3>
                <h3 className={active === "Favourites" ? "activeSideBar" : ""} onClick={() => handleClick("Favourites")}>Favourites</h3>
                <h3 className={active === "Watchlist" ? "activeSideBar" : ""} onClick={() => handleClick("Watchlist")}>Watchlist</h3>
                <h3 className={active === "Log Out" ? "activeSideBar" : ""} onClick={() => handleClick("Log Out")}>Log Out</h3>
                </div> 
            </div>
            <div className="profileRCol">
                <div className="profileHeader">
                    <div className="userAvatar">
                        </div>
                        <div className="profileInfo">
                            <h1>Name Surname</h1>
                            <h3>Email</h3>
                        </div>
                        <div className="profileMenu">
                        {activeBar ? <FaBars className="bars" onClick={handleBar}/>: <FaTimes className="close" onClick={handleBar}/>}
                        {!activeBar ? <ul>
                                <li className={active === "Profile" ? "activeSideBar" : ""} onClick={() => handleClick("Profile")}>Profile</li>
                                <li className={active === "Favourites" ? "activeSideBar" : ""} onClick={() => handleClick("Favourites")}>Favourites</li>
                                <li className={active === "Watchlist" ? "activeSideBar" : ""} onClick={() => handleClick("Watchlist")}>Watchlist</li>
                                <li className={active === "Log Out" ? "activeSideBar" : ""} onClick={() => handleClick("Log Out")}>Log Out</li>
                        </ul>: null}
                        </div>
                    </div>
                <div className="profileInfoSection">
                    {active === "Watchlist" ? <ProfileMoviePagination page="Watchlist"/> : active === "Favourites" ? <ProfileMoviePagination page="Favourites"/>: null}
                </div>
            </div>
        </div>
    );
}