import React, { useEffect, useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../Context/Context";
import jwt_decode from 'jwt-decode';

import ProfileMoviePagination from "../../Components/ProfileMoviePagination";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import ProfileInfoSection from "../../Components/ProfileInfoSection";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const {setIsLoading, user} = useGlobalContext();
    const [active, setActive] = useState("Profile");
    const [activeBar, setActiveBar] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedToken = jwt_decode(token);
        if(decodedToken.sub !== user.email) {
            navigate("/error-page");
        }
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
                    <h3>Log Out</h3>
                </div> 
            </div>
            <div className="profileRCol">
                <div className="profileHeader">
                        {user.avatar ? <div className="userAvatar" style={{backgroundImage: `url(${user.avatar})`}}>
                        </div>: <div className="userAvatar" style={{backgroundImage: `url(${DefaultUser})`}}>
                        </div>}
                        <div className="profileInfo">
                            <h1>{user.firstName} {user.lastName}</h1>
                            <h3>{user.email}</h3>
                        </div>
                        <div className="profileMenu">
                        {activeBar ? <FaBars className="bars" onClick={handleBar}/>: <FaTimes className="close" onClick={handleBar}/>}
                        {!activeBar ? <ul>
                                <li className={active === "Profile" ? "activeSideBar" : ""} onClick={() => handleClick("Profile")}>Profile</li>
                                <li className={active === "Favourites" ? "activeSideBar" : ""} onClick={() => handleClick("Favourites")}>Favourites</li>
                                <li className={active === "Watchlist" ? "activeSideBar" : ""} onClick={() => handleClick("Watchlist")}>Watchlist</li>
                                <li>Log Out</li>
                        </ul>: null}
                        </div>
                    </div>
                <div className="profileInfoSection">
                    {active === "Watchlist" ? <ProfileMoviePagination page="Watchlist"/> : active === "Favourites" ? <ProfileMoviePagination page="Favourites"/>: active === "Profile" ? <ProfileInfoSection/>: null}
                </div>
            </div>
        </div>
    );
}