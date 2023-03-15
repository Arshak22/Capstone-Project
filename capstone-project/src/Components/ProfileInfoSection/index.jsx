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
import { getProfileByEmail, updateProfile, deleteProfile } from "../../Platform/Profiles";
import { getFavoriteGenres, addFavoriteGenre, deleteFavoriteGenre } from "../../Platform/FavoriteGenres";
import { uploadProfileImage, getProfileImage } from "../../Platform/ProfileImage";
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";

export default function ProfileInfoSection() {
    const {setUser, userFavGenres, setUserFavGenres, avatar, setAvatar, setShowProfile, setCastPopUpOpen} = useGlobalContext();
    const [active, setActive] = useState("Edit");
    const [uploadedAvatar, setUploadedAvatar] = useState(false);
    const [profile, setProfile] = useState();
    const [showCaseAvatar, setShowcaseAvatar] = useState();
    const [popUpState, setPopUpState] = useState(false);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const navigate = useNavigate();
    const [tempUser] = useState({
        firstName: "",
        lastName: "",
        password: "",
        newPassword: ""
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
        if (token) {
            const decodedToken = jwt_decode(token);
            if(decodedToken.sub) {
               getProfile(decodedToken.sub, token);
            }
        }
    }, [])

    useEffect(() => {
        setCastPopUpOpen(false);
        if (token) {
            const decodedToken = jwt_decode(token);
            if(decodedToken.sub) {
               if(profile) {
                    getFavoriteGenresList(profile.id, token);
                    getAvatar(profile.id);
               }
            }
        }
    }, [profile, tempUser]);

    const handleOpen = () => {
        setPopUpState(true);
        document.body.classList.add('hiddenScroll');
        setCastPopUpOpen(true);
    };

    const handleClose = () => {
        setPopUpState(false);
        document.body.classList.remove('hiddenScroll');
        setCastPopUpOpen(false);
    };


    const getProfile = async (email, jwt) => {
        try {
            const result = await getProfileByEmail(email, jwt);
            setProfile(result.data);
            tempUser.firstName = result.data.firstName;
            tempUser.lastName = result.data.lastName;
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = (name) => {
        setActive(name);
    };

    const handleFirstName = (e) => {
        if (e.target.value === "") {
            tempUser.firstName = profile.firstName;
        } else {
            tempUser.firstName = e.target.value;
        }
    };

    const handleLastName = (e) => {
        if (e.target.value === "") {
            tempUser.lastName = profile.lastName;
        } else {
            tempUser.lastName = e.target.value;
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
        const text = e.target.textContent.trim().toUpperCase();
        if(!userFavGenres.includes(text)) {
            if(text === "SCIENCE FICTION") {
                userFavGenres.push("SCIENCE_FICTION");
            } else {
                userFavGenres.push(text);
            }
        } else {
            userFavGenres.splice(userFavGenres.indexOf(text), 1)
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
            passwordError: "",
            avatarError: "",
            favoriteGenresError: ""
        }
        if (!tempUser.password) {
            error.passwordError = "Please enter your current password";
            v = false;
        }
        if (userFavGenres.length < 3) {
            error.favoriteGenresError = "Please pick at least three favorite genres";
            v = false;
        }
        setErrors(error);
        return v;
    };

    const handleEdit = async () => {
        if(validate()) {
            const token = localStorage.getItem("token");
            const updatedUser = {
                firstName: tempUser.firstName,
                lastName: tempUser.lastName,
                email: profile.email,
                password: tempUser.newPassword ? tempUser.newPassword: tempUser.password
            }
            const favG = userFavGenres;
            setUser(tempUser);
            setUploadedAvatar(false);
            await updateMyProfile(profile.id, updatedUser, token);
            await changeFavoriteGenres(profile.id, favG, token);
            await uploadAvatar(profile.id, tempUser.avatar, token);
            window.location.reload();
        }
    };

    const getFavoriteGenresList = async (id, token) => {
        try {
            const result = await getFavoriteGenres(id, token);
            setUserFavGenres(result.data);
            setUploadedAvatar(false);
        } catch (error) {
        }
    };

    const changeFavoriteGenres = async (id, genres, token) => {
        try {
            await addFavoriteGenre(id, genres, token);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteGenre = async (genre) => {
        const token = localStorage.getItem("token");
        try {
            await deleteFavoriteGenre(profile.id, genre, token);
            const result = await getFavoriteGenres(profile.id, token);
            setUserFavGenres(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const uploadAvatar = async (profileID, image, jwt) => {
        try {
            await uploadProfileImage(profileID, image, jwt);
        } catch (error) {
            console.log(error);
        }
    };

    const getAvatar = async (profileID, jwt) => {
        try {
            const result = await getProfileImage(profileID, jwt);
            setAvatar(`data:${result.data.type};base64,${result.data.imageData}`);
        } catch (error) {
            console.log("No avatar yet");
        }
    };

    const updateMyProfile = async(id, profile, token) => {
        try {
            await updateProfile(id, profile, token);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProfle = async () => {
        try {
            await deleteProfile(id, token);
            localStorage.clear();
            setAvatar("");
            setShowProfile(false);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="ProfileInfoSection">
            <div className="profileInfoL">
                <div className="bluryProfileBox">
                    {avatar ? <div className="avatar" style={{backgroundImage: `url(${avatar})`}}>
                    </div>: <div className="avatar" style={{backgroundImage: `url(${DefaultUser})`}}>
                    </div>}
                    <div className="profileInfoSmall">
                        {profile ? <><h2>{profile.firstName} {profile.lastName}</h2>
                        <h4>{profile.email}</h4></>: null}
                    </div>
                   <div className="favoriteGenres">
                    {userFavGenres.map((elem, index) => {
                        return (
                            elem === "SCIENCE_FICTION" ? <h4 onClick={()=>deleteGenre("SCIENCE_FICTION")} key={index}><GiTicket className="ticket"/>SCIENCE FICTION</h4>: <h4 onClick={()=>deleteGenre(elem)} key={index}><GiTicket className="ticket"/>{elem}</h4>
                        );
                    })}
                   </div>
                </div>
            </div>
            <div className="profileInfoR">
                <div className="bluryProfileBox">
                    <div className="smallBar">
                        <h2 className={active === "Edit" ? "activeSmallBar" : ""} onClick={() => handleClick("Edit")}>Edit Profile</h2>
                        <h2 className={active === "Comments" ? "activeSmallBar" : ""} onClick={() => handleClick("Comments")}>My Comments</h2>
                    </div>
                    {active === "Edit" ? 
                    <div className="editProfile">
                        <div className="smallInputs">
                            <div className="inputBox">
                                {profile ? <input onChange={handleFirstName} className="editInput" type="text" name="firstName" placeholder="First Name" required defaultValue={profile.firstName}/>:
                                <input onChange={handleFirstName} className="editInput" type="text" name="firstName" placeholder="First Name" required/>}
                                
                            </div>
                            <div className="inputBox">
                                {profile ? <input onChange={handleLastName} className="editInput" type="text" name="lastName" placeholder="Last Name" required defaultValue={profile.lastName}/>:
                                <input onChange={handleLastName} className="editInput" type="text" name="lastName" placeholder="Last Name" required/>}
                                
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
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Science Fiction</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Horror</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Fantasy</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Adventure</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Mystery</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Romance</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Animation</h4>
                            <h4 onClick={handleGenres}><GiTicket className="ticket"/>Crime</h4>
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
                        <Popup trigger={<button className="btn btn2">Delete Profile<IoPersonRemove className="userBtnIcon"/></button>} 
                            position="center"
                            open={popUpState}
                            onOpen={handleOpen}
                            onClose={handleClose}>
                            {close => (
                                <div className="iconPopUp deleteProfilePopUp">
                                    <button className="closePopUp" onClick={close}>
                                    x
                                    </button>
                                    <h3>Are You Sure?</h3>
                                    <p>This action will permanently delete the profile data.</p>
                                    <div className="deleteProfileBtns">
                                        <button onClick={close} className="btn btn2">Cancel</button>
                                        <button onClick={handleDeleteProfle} className="btn btn2">Delete</button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>: <ProfileCommentSection id={id}/>}
                </div>
            </div>
        </div>
    );
}