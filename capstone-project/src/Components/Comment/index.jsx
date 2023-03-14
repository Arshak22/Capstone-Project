import React, {useState, useEffect} from "react";
import "./style.css";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";
import { updateComment, deleteComment } from "../../Platform/Comment";
import { getProfileImage } from "../../Platform/ProfileImage";
import { useGlobalContext } from "../../Context/Context";

//icons
import {AiFillEdit} from "react-icons/ai";
import {ImCross} from "react-icons/im";

export default function Comment(props) {
    const {renderOnCommentChange, setRenderOnCommentChange} = useGlobalContext();
    const [tempComment, setTempComment] = useState();
    const [commentAvatar, setCommentAvatar] = useState();
    const [editedAt, setEditedAt] = useState("");

    useEffect(() => {
        getAvatar(props.commenterID);
        handleEditedAt(props.createdAt);
    }, [props]);

    const getAvatar = async (profileID) => {
        try {
            const result = await getProfileImage(profileID);
            setCommentAvatar(`data:${result.data.type};base64,${result.data.imageData}`);
        } catch (error) {
            console.log("No avatar yet");
        }
    };

    const handleEditedAt = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now.getTime() - date.getTime();

        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

        if (years > 0) {
            setEditedAt(`${years}y ago`);
        } else if (months > 0) {
            setEditedAt(`${months}m ago`);
        } else if (days > 0) {
            setEditedAt(`${days}d ago`);
        } else if (hours > 0) {
            setEditedAt(`${hours}h ago`);
        } else if (minutes > 0) {
            setEditedAt(`${minutes}m ago`);
        } else {
            setEditedAt(`Just now`);
        }
    };

    const handleCommentEdit = (i) => {
        const comment = document.getElementById(`${i}`);
        const postBtn = document.getElementById(`movieCommentBtn${i}`);
        comment.classList.toggle("editableComment");
        postBtn.classList.toggle("movieCommentBtnVisible");
        if ((comment.getAttribute("readOnly") === "") || comment.getAttribute("readOnly")) {
            comment.removeAttribute("readOnly");
        } else {
            comment.setAttribute("readOnly", true);
        }
    };

    const handleUpdatedComment = (e) => {
        setTempComment(e.target.value);
    };

    const handleUpdateCommentPost = async (id) => {
        try {
            if (tempComment) {
                const postCommentBody = {
                    "commenterId": props.commenterID,
                    "text": tempComment,
                    "watchableId": props.watchableID
                }
                await updateComment(id, postCommentBody, props.token);
                setRenderOnCommentChange(!renderOnCommentChange);
                const comment = document.getElementById(`${id}`);
                const postBtn = document.getElementById(`movieCommentBtn${id}`);
                postBtn.classList.remove("movieCommentBtnVisible");
                comment.classList.remove("editableComment");
                comment.setAttribute("readOnly", true);

            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteComment = async (id) => {
        try {
            await deleteComment(id, props.token);
            setRenderOnCommentChange(!renderOnCommentChange);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="movieComment">
            {commentAvatar ? <div className="movieCommentAvatar" style={{backgroundImage: `url(${commentAvatar})`}}>
            </div> : <div className="movieCommentAvatar" style={{backgroundImage: `url(${DefaultUser})`}}>
            </div>}
            <div className="movieCommentBody">
                <h1>{props.commenterFullName}</h1>
                <h4>{editedAt}</h4>
                {props.comment ? <textarea onChange={handleUpdatedComment} name="movieComment" className="movieCommentText" id={props.commentID} rows="4" defaultValue={props.comment} readOnly></textarea>: null}
                {props.id == props.commenterID ?
                <div className="movieCommentIcons">
                    <AiFillEdit onClick={() => handleCommentEdit(props.commentID)} className="movieCommentIcon"/>
                    <ImCross className="movieCommentIcon" onClick={() => handleDeleteComment(props.commentID)}/>
                </div>: null}
                <div className="commentBtnBox">
                    <button id={`movieCommentBtn${props.commentID}`} className="movieCommentBtn" onClick={() => handleUpdateCommentPost(props.commentID)}>Edit</button>
                </div>
            </div>
        </div>
    );
}