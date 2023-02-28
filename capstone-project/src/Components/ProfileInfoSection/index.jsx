import {React, useState, useEffect} from "react";
import "./style.css";
import {useGlobalContext} from "../../Context/Context";
import jwt_decode from 'jwt-decode';
import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";
import {FaFileUpload} from "react-icons/fa";
import {GiTicket} from "react-icons/gi";
import {FaUserEdit} from "react-icons/fa";
import {IoPersonRemove} from "react-icons/io5";
import ProfileCommentSection from "../ProfileCommentSection";
import { getProfileByEmail } from "../../Platform/Profiles";
import { uploadProfileImage, getProfileImage, updateProfileImage } from "../../Platform/ProfileImage";

export default function ProfileInfoSection() {
    const {user, setUser} = useGlobalContext();
    const [active, setActive] = useState("Comments");
    const [uploadedAvatar, setUploadedAvatar] = useState(false);
    const [profile, setProfile] = useState();
    const [showCaseAvatar, setShowcaseAvatar] = useState(); 
    const [userAvatar, setUserAvatar] = useState();
    const [tempUser, setTempUser] = useState({
        firstName: null,
        lastName: null,
        avatar: null,
        password: null,
        newPassword: null,
        favoriteGenres: []
    });
    const [errors, setErrors] = useState(
        {
            firstNameError: "",
            lastNameError: "",
            passwordError: "",
            avatarError: "",
            favoriteGenresError: ""
        }
    );

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            if(decodedToken.sub) {
               getProfile(decodedToken.sub, token);
            }
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            if(decodedToken.sub) {
               if(profile) {
                    getAvatar(profile.id, token);
               }
            }
        }
    }, [profile]);


    const getProfile = async (email, jwt) => {
        try {
            const result = await getProfileByEmail(email, jwt);
            setProfile(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (name) => {
        setActive(name);
    };

    const handleFirstName = (e) => {
        tempUser.firstName = e.target.value;
    };

    const handleLastName = (e) => {
        tempUser.lastName = e.target.value;
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
        const formData = new FormData();
        formData.append('image', file);
        tempUser.avatar = formData;
        let error = {
            firstNameError: errors.firstNameErrror,
            lastNameError: errors.lastNameError,
            passwordError: errors.passwordError,
            emailError: errors.emailError,
            avatarError: "",
            favoriteGenresError: errors.favoriteGenresError
        }
        if(file.size > 1000000) {
            error.avatarError = "File size exceeds 1MB"
            setErrors(error);
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setShowcaseAvatar(reader.result);
            setUploadedAvatar(true);
        }
    };

    const validate = () => {
        let v = true;
        let error = {
            firstNameError: "",
            lastNameError: "",
            passwordError: "",
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
            const token = localStorage.getItem("token");
            setUser(tempUser);
            uploadAvatar(profile.id, tempUser.avatar, token);
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

    const uploadAvatar = async (profileID, image, jwt) => {
        try {
            await uploadProfileImage(profileID, image, jwt);
        } catch (error) {
            console.log(error);
        }
    }

    const getAvatar = async (profileID, jwt) => {
        try {
            const result = await getProfileImage(profileID, jwt);
            setUserAvatar(`data:${result.data.type};base64,${result.data.imageData}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="ProfileInfoSection">
            <div className="profileInfoL">
                <div className="bluryProfileBox">
                    {userAvatar ? <div className="avatar" style={{backgroundImage: `url(${userAvatar})`}}>
                    </div>: <div className="avatar" style={{backgroundImage: `url(${DefaultUser})`}}>
                    </div>}
                    <div className="profileInfoSmall">
                        {profile ? <><h2>{profile.firstName} {profile.lastName}</h2>
                        <h4>{profile.email}</h4></>: null}
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
                                {profile ? <input onChange={handleFirstName} className="editInput" type="text" name="firstName" placeholder="First Name" required defaultValue={profile.firstName}/>:
                                <input onChange={handleFirstName} className="editInput" type="text" name="firstName" placeholder="First Name" required/>}
                                <span className="profileInputError">{errors.firstNameError}</span>
                            </div>
                            <div className="inputBox">
                                {profile ? <input onChange={handleLastName} className="editInput" type="text" name="lastName" placeholder="Last Name" required defaultValue={profile.lastName}/>:
                                <input onChange={handleLastName} className="editInput" type="text" name="lastName" placeholder="Last Name" required/>}
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
                        <h4 className="myLable">Upload New Avatar (up to 1MB)</h4>
                        <div className="smallInputs">
                            <input onChange={handleAvatar} required type="file" id="avatarFile" name="picture" accept="image/*"/>
                            <label className="avatarUpload" htmlFor="avatarFile"><FaFileUpload className="uploadIcon"/>Select File</label>
                            {uploadedAvatar ? <div className="avatarPreview" style={{backgroundImage: `url(${showCaseAvatar})`}}>
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