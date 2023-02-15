import {React, useState} from "react";
import "./style.css";
import {useGlobalContext} from "../../Context/Context";

export default function ProfileInfoSection() {
    const {user} = useGlobalContext();
    const [active, setActive] = useState("Comments");

    const handleClick = (name) => {
        setActive(name);
    };

    return (
        <div className="ProfileInfoSection">
            <div className="profileInfoL">
                <div className="bluryProfileBox">
                    <div className="avatar">
                        <img src={user.avatar} alt="UserAvatar" />
                    </div>
                   <h2>{user.firstName} {user.lastName}</h2>
                   <h2>{user.email}</h2>
                   <div>
                   </div>
                </div>
            </div>
            <div className="profileInfoR">
                <div className="bluryProfileBox">
                    <div className="smallBar">
                        <h2 className={active === "Comments" ? "activeSmallBar" : ""} onClick={() => handleClick("Comments")}>My Comments</h2>
                        <h2 className={active === "Edit" ? "activeSmallBar" : ""} onClick={() => handleClick("Edit")}>Edit Profile</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}