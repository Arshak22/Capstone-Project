import {React, useState} from "react";
import "./style.css";
import {useGlobalContext} from "../../Context/Context";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";
import {FaFileUpload} from "react-icons/fa";
import {GiTicket} from "react-icons/gi";
import {FaUserEdit} from "react-icons/fa";
import {IoPersonRemove} from "react-icons/io5";
import ProfileCommentSection from "../ProfileCommentSection";

export default function ProfileInfoSection() {
    const {user, setUser} = useGlobalContext();
    const [active, setActive] = useState("Comments");
    const [uploadedAvatar, setUploadedAvatar] = useState(false);
    const [tempUser, setTempUser] = useState({
        firstName: null,
        lastName: null,
        avatar: null,
        email: null,
        password: null,
        newPassword: null,
        favoriteGenres: []
    });
    const [errors, setErrors] = useState(
        {
            firstNameErrror: "",
            lastNameError: "",
            passwordError: "",
            emailError: "",
            avatarError: "",
            favoriteGenresError: ""
        }
    );

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

    const handlePassword = (e) => {
        tempUser.password = e.target.value;
    };

    const handleNewPassword = (e) => {
        tempUser.newPassword = e.target.value;
    };

    const handleGenres = (e) => {
        e.target.classList.toggle("activeGenre");
        const text = e.target.textContent.trim();
        if(!tempUser.favoriteGenres.includes(text)) {
            tempUser.favoriteGenres.push(text);
        } else {
            tempUser.favoriteGenres.splice(tempUser.favoriteGenres.indexOf(text), 1)
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
        }
    };

    const validate = () => {
        let v = true;
        let error = {
            firstNameError: "",
            lastNameError: "",
            passwordError: "",
            emailError: "",
            avatarError: "",
            favoriteGenresError: ""
        }
        if(!tempUser.firstName) {
            error.firstNameError = "Please enter your first name";
            v = false;
        }
        if(!tempUser.lastName) {
            error.lastNameError = "Please enter your last name";
            v = false;
        }
        if (!tempUser.password) {
            error.passwordError = "Please enter your current password";
            v = false;
        }
        if (!tempUser.email) {
            error.emailError = "Please enter your new email";
            v = false;
        }
        if (tempUser.favoriteGenres.length < 3) {
            error.favoriteGenresError = "Please pick at least three favorite genres";
            v = false;
        }
        if (!tempUser.avatar) {
            error.avatarError = "Please submit your new profile picture";
            v = false;
        }
        setErrors(error);
        return v;
    }

    const handleEdit = () => {
        if(validate()) {
            setUser(tempUser);
            const inputs = document.querySelectorAll('.editInput');
            for (let input of inputs) {
                input.value = "";
            }
            setUploadedAvatar(false);
            const genres = document.querySelectorAll('.pickFavoriteGenres>h4');
            for (let genre of genres) {
                genre.classList.remove("activeGenre");
            }
            const reset = {
                firstName: null,
                lastName: null,
                avatar: null,
                email: null,
                password: null,
                newPassword: null,
                favoriteGenres: []
            }
            setTempUser(reset);
        }
    };

    return (
        <div className="ProfileInfoSection">
            <div className="profileInfoL">
                <div className="bluryProfileBox">
                    {user.avatar ? <div className="avatar" style={{backgroundImage: `url(${user.avatar})`}}>
                    </div>: <div className="avatar" style={{backgroundImage: `url(${DefaultUser})`}}>
                    </div>}
                    <div className="profileInfoSmall">
                        <h2>{user.firstName} {user.lastName}</h2>
                        <h4>{user.email}</h4>
                    </div>
                   <div className="favoriteGenres">
                    {user.favoriteGenres.map((elem, index) => {
                        return (
                            <h4 key={index}><GiTicket className="ticket"/>{elem}</h4>
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
                            <div className="inputBox">
                                <input onChange={handleFirstName} className="editInput" type="text" name="firstName" placeholder="First Name" required/>
                                <span className="profileInputError">{errors.firstNameError}</span>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleLastName} className="editInput" type="text" name="lastName" placeholder="Last Name" required/>
                                <span className="profileInputError">{errors.lastNameError}</span>
                            </div>
                        </div>
                        <div className="smallInputs">
                            <div className="inputBox">
                                <input onChange={handlePassword} className="editInput" type="password" name="password" placeholder="Current Password" required/>
                                <span className="profileInputError">{errors.passwordError}</span>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleNewPassword} className="editInput" type="password" name="newPassword" placeholder="New Password (Opt.)"/>
                                <span className="profileInputError"></span>
                            </div>
                        </div>
                        <div className="smallInputs">
                            <div className="inputBox">
                                <input onChange={handleEmail} className="editInput Email" type="email" name="email" placeholder="Email Address" required/>
                                <span className="profileInputError">{errors.emailError}</span>
                            </div>
                        </div>
                        <h4 className="myLable">Pick At Least 3 Favorite Genres</h4>
                        <div className="pickFavoriteGenres">
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Action</h4>                            
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Comedy</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Drama</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Thriller</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Sci-fi</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Horror</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Fantasy</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Adventure</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Mystery</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Romance</h4>
                        </div>
                        <div className="inputBox">
                            <span className="profileInputError genreError">{errors.favoriteGenresError}</span>
                        </div>
                        <h4 className="myLable">Upload New Avatar</h4>
                        <div className="smallInputs">
                            <input onChange={handleAvatar} required type="file" id="avatarFile" name="picture" accept="image/*"/>
                            <label className="avatarUpload" htmlFor="avatarFile"><FaFileUpload className="uploadIcon"/>Select File</label>
                            {uploadedAvatar ? <div className="avatarPreview" style={{backgroundImage: `url(${tempUser.avatar})`}}>
                            </div>: null}
                        </div>
                        <div className="inputBox">
                            <span className="profileInputError genreError">{errors.avatarError}</span>
                        </div>
                        <button onClick={handleEdit} className="btn btn2">Edit Profile<FaUserEdit className="userBtnIcon"/></button>
                        <button className="btn btn2">Delete Profile<IoPersonRemove className="userBtnIcon"/></button>
                    </div>: <ProfileCommentSection/>}
                </div>
            </div>
        </div>
    );
}