import React, { useEffect, useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../Context/Context";
import { getProfileByEmail } from "../../Platform/Profiles";
import ProfileInfoSection from "../../Components/ProfileInfoSection";
import { getProfileImage } from "../../Platform/ProfileImage";
import jwt_decode from 'jwt-decode';

import ProfileMoviePagination from "../../Components/ProfileMoviePagination";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const {setIsLoading, setAvatar, setShowProfile, castPopUpOpen, setCastPopUpOpen} = useGlobalContext();
    const [profile, setProfile] = useState();
    const [active, setActive] = useState("Profile");
    const [activeBar, setActiveBar] = useState(true);
    const [userAvatar, setUserAvatar] = useState();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        setCastPopUpOpen(false);
        if(!token) {
            navigate("/error-page");
        } else {
            const decodedToken = jwt_decode(token);
            if(!decodedToken.sub) {
                navigate("/error-page");
            } else {
                getProfile(decodedToken.sub, token);
            }
        }
        document.title = "Movie Mavericks: Profile Page";
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    useEffect(() => {
        if (token) {
            const decodedToken = jwt_decode(token);
            if(decodedToken.sub) {
               if(profile) {
                    getAvatar(profile.id);
               }
            }
        }
    }, [profile]);

    const getProfile = async (email, jwt) => {
        try {
            const result = await getProfileByEmail(email, jwt);
            if(!result.data.enabled) {
                setShowProfile(false);
                localStorage.clear();
                navigate("/error-page");
                return;
            }
            setProfile(result.data);
            localStorage.setItem("id", result.data.id);
            localStorage.setItem("email", result.data.email);
        } catch (error) {
            navigate("/error-page");
        }
    };

    const getAvatar = async (profileID) => {
        try {
            const result = await getProfileImage(profileID);
            setUserAvatar(`data:${result.data.type};base64,${result.data.imageData}`);
        } catch (error) {
            console.log("No avatar yet");
        }
    };

    const handleClick = (name) => {
        setActive(name);
    };

    const handleBar = () => {
        setActiveBar(!activeBar);
    };

    const logOut = () => {
        localStorage.clear();
        setAvatar("");
        setShowProfile(false);
        navigate("/");
    }

    return (
        <div className={`profileContainer ${castPopUpOpen ? 'popup-open' : ''}`} >
            <div className="sideBar">
                <div className="rowspan">
                    <h3 className={active === "Profile" ? "activeSideBar" : ""} onClick={() => handleClick("Profile")}>Profile</h3>
                    <h3 className={active === "Favourites" ? "activeSideBar" : ""} onClick={() => handleClick("Favourites")}>Favourites</h3>
                    <h3 className={active === "Watchlist" ? "activeSideBar" : ""} onClick={() => handleClick("Watchlist")}>Watchlist</h3>
                    <h3 onClick={logOut}>Log Out</h3>
                </div> 
            </div>
            <div className="profileRCol">
                <div className="profileHeader">
                        {userAvatar ? <div className="userAvatar" style={{backgroundImage: `url(${userAvatar})`}}>
                        </div>: <div className="userAvatar" style={{backgroundImage: `url(${DefaultUser})`}}>
                        </div>}
                        <div className="profileInfo">
                            {profile ? <><h1>{profile.firstName} {profile.lastName}</h1>
                            <h3>{profile.email}</h3></>: null}
                        </div>
                        <div className="profileMenu">
                        {activeBar ? <FaBars className="bars" onClick={handleBar}/>: <FaTimes className="close" onClick={handleBar}/>}
                        {!activeBar ? <ul>
                                <li className={active === "Profile" ? "activeSideBar" : ""} onClick={() => handleClick("Profile")}>Profile</li>
                                <li className={active === "Favourites" ? "activeSideBar" : ""} onClick={() => handleClick("Favourites")}>Favourites</li>
                                <li className={active === "Watchlist" ? "activeSideBar" : ""} onClick={() => handleClick("Watchlist")}>Watchlist</li>
                                <li onClick={logOut}>Log Out</li>
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