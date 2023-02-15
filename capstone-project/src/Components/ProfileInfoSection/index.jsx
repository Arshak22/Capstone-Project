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
                    {active === "Edit" ? 
                    <div className="editProfile">
                        <input className="editInput" type="text" name="firstName" placeholder="First Name" required/>
                        <input className="editInput" type="text" name="lastName" placeholder="Last Name" required/>
                        <input className="editInput" type="email" name="email" placeholder="Email Address" required/>
                        <input className="editInput" type="password" name="password" placeholder="Password" required/>
                        <input className="editInput" type="password" name="newPassword" placeholder="New Password" required/>
                        <button className="btn btn2">Edit Profile</button>
                        <button className="btn btn2">Delete Profile</button>
                    </div>: null}
                </div>
            </div>
        </div>
    );
}