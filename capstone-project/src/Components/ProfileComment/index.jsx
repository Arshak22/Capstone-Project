import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import { useGlobalContext } from "../../Context/Context";
import { updateComment, deleteComment } from "../../Platform/Comment";

import {FaArrowRight} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {ImCross} from "react-icons/im";

export default function ProfileComment(props) {
    const {renderOnCommentChange, setRenderOnCommentChange} = useGlobalContext();
    const [tempComment, setTempComment] = useState();
    const [editedAt, setEditedAt] = useState("");
    useEffect(() => {
        handleEditedAt(props.commentInfo.createdAt);
    }, [props]);

    const handleCommentEdit = (i) => {
        const comment = document.getElementById(`${i}`);
        const postBtn = document.getElementById(`commentBtn${i}`);
        comment.classList.toggle("editableComment");
        postBtn.classList.toggle("commentBtnVisible");
        if ((comment.getAttribute("readOnly") === "") || comment.getAttribute("readOnly")) {
            comment.removeAttribute("readOnly");
        } else {
            comment.setAttribute("readOnly", true);
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

    const handleUpdatedComment = (e) => {
        setTempComment(e.target.value);
    };

    const handleUpdateCommentPost = async (id) => {
        try {
            if (tempComment) {
                const postCommentBody = {
                    "commenterId": props.commentInfo.commenterId,
                    "text": tempComment,
                    "watchableId": props.commentInfo.watchableId
                }
                await updateComment(id, postCommentBody, props.token);
                setRenderOnCommentChange(!renderOnCommentChange);
                const comment = document.getElementById(`${id}`);
                const postBtn = document.getElementById(`commentBtn${id}`);
                postBtn.classList.remove("commentBtnVisible");
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
        <div className="profileCommentBody">
            <h1>{editedAt}</h1>
            <textarea onChange={handleUpdatedComment} name="profileComment" className="profileCommentText" id={props.commentInfo.id} rows="3" defaultValue={props.commentInfo.text} readOnly></textarea>
            <div className="profileCommentIcons">
                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + props.commentInfo.watchableId} end><FaArrowRight className="profileCommentIcon"/></NavLink>
                <AiFillEdit onClick={() => handleCommentEdit(props.commentInfo.id)} className="profileCommentIcon"/>
                <ImCross onClick={() => handleDeleteComment(props.commentInfo.id)} className="profileCommentIcon"/>
            </div>
            <div className="profileCommentBtnBox">
                <button onClick={() => handleUpdateCommentPost(props.commentInfo.id)} id={`commentBtn${props.commentInfo.id}`} className="commentBtn">Edit</button>
            </div>
        </div>
    )
}