import React, { useEffect, useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../Context/Context";


export default function Profile() {
    const {setIsLoading} = useGlobalContext();
    const [active, setActive] = useState("Profile");

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    const handleClick = (name) => {
        setActive(name);
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
                    </div>
                <div className="profileInfoSection">
                </div>
            </div>
        </div>
    );
}