import {React, useEffect, useState} from "react";
import "./style.css";
import {useGlobalContext} from "../../Context/Context";

export default function ProfileInfoSection() {
    const {user, setUser} = useGlobalContext();
    const [active, setActive] = useState("Comments");
    const [uploadedAvatar, setUploadedAvatar] = useState(false);
    const [tempUser, setTempUser] = useState({
        firstName: "",
        lastName: "",
        avatar: null,
        email: "",
        password: null,
        favoriteGenres: []
    });

    useEffect(() => {
    }, [tempUser.avatar]);

    const handleClick = (name) => {
        setActive(name);
    };

    const handleFirstName = (e) => {
        tempUser.firstName = e.target.value;
    };

    const handleLastName = (e) => {
        tempUser.lastName = e.target.value;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmail = (e) => {
        if (validateEmail(e.target.value)) {
            tempUser.email = e.target.value;
        }
    };

    const handleNewPassword = (e) => {
        tempUser.password = e.target.value;
    };

    const handleGenres = (e) => {
        e.target.classList.toggle("activeGenre");
        if(!tempUser.favoriteGenres.includes(e.target.innerHTML + "")) {
            tempUser.favoriteGenres.push(e.target.innerHTML + "");
        } else {
            tempUser.favoriteGenres.splice(tempUser.favoriteGenres.indexOf(e.target.innerHTML + ""), 1)
        }
    };

    const handleAvatar = (e) => {
        setUploadedAvatar(false);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            tempUser.avatar = reader.result;
            setUploadedAvatar(true);
        };
    }

    const handleEdit = () => {
        if(tempUser.firstName && tempUser.lastName && tempUser.email && tempUser.password && tempUser.avatar && tempUser.favoriteGenres.length !== 0) {
            setUser(tempUser);
        }
    }

    return (
        <div className="ProfileInfoSection">
            <div className="profileInfoL">
                <div className="bluryProfileBox">
                    <div className="avatar" style={{backgroundImage: `url(${user.avatar})`}}>
                    </div>
                    <div className="profileInfoSmall">
                        <h2>{user.firstName} {user.lastName}</h2>
                        <h4>{user.email}</h4>
                    </div>
                   <div className="favoriteGenres">
                    {user.favoriteGenres.map((elem, index) => {
                        return (
                            <h4 key={index}>{elem}</h4>
                        );
                    })}
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
                        <div className="smallInputs">
                            <input onChange={handleFirstName} className="editInput" type="text" name="firstName" placeholder="First Name" required/>
                            <input onChange={handleLastName} className="editInput" type="text" name="lastName" placeholder="Last Name" required/>
                        </div>
                        <div className="smallInputs">
                            <input className="editInput" type="password" name="password" placeholder="Password" required/>
                            <input onChange={handleNewPassword} className="editInput" type="password" name="newPassword" placeholder="New Password" required/>
                        </div>
                        <div className="smallInputs">
                            <input onChange={handleEmail} className="editInput Email" type="email" name="email" placeholder="Email Address" required/>
                        </div>
                        <h4 className="myLable">Pick Favorite Genres</h4>
                        <div className="pickFavoriteGenres">
                            <h4 onClick={handleGenres}>Action</h4>
                            <h4 onClick={handleGenres}>Comedy</h4>
                            <h4 onClick={handleGenres}>Drama</h4>
                            <h4 onClick={handleGenres}>Thriller</h4>
                            <h4 onClick={handleGenres}>Sci-fi</h4>
                            <h4 onClick={handleGenres}>Horror</h4>
                            <h4 onClick={handleGenres}>Fantasy</h4>
                            <h4 onClick={handleGenres}>Adventure</h4>
                            <h4 onClick={handleGenres}>Mystery</h4>
                            <h4 onClick={handleGenres}>Romance</h4>
                        </div>
                        <h4 className="myLable">Upload New Avatar</h4>
                        <div className="smallInputs">
                            <input onChange={handleAvatar} required type="file" id="avatarFile" name="picture" accept="image/*"/>
                            <label className="avatarUpload" htmlFor="avatarFile">Select File</label>
                            {uploadedAvatar ? <div className="avatarPreview" style={{backgroundImage: `url(${tempUser.avatar})`}}>
                            </div>: null}
                        </div>
                        <button onClick={handleEdit} className="btn btn2">Edit Profile</button>
                        <button className="btn btn2">Delete Profile</button>
                    </div>: null}
                </div>
            </div>
        </div>
    );
}