import React from "react";
import "./style.css";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";

import {FaArrowRight} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {ImCross} from "react-icons/im";

export default function Comment(props) {

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
    }

    return (
        <div className="movieComment">
            <div className="movieCommentAvatar" style={{backgroundImage: `url(${DefaultUser})`}}>
            </div>
            <div className="movieCommentBody">
                <h1>{props.name}</h1>
                <h4>{props.date}</h4>
                <textarea name="movieComment" className="movieCommentText" id={props.id} rows="4" readOnly>{props.comment}</textarea>
                <div className="movieCommentIcons">
                    <AiFillEdit onClick={() => handleCommentEdit(props.id)} className="movieCommentIcon"/>
                    <ImCross className="movieCommentIcon"/>
                </div>
                <button id={`commentBtn${props.id}`} className="commentBtn">Edit</button>
            </div>
        </div>
    );
}