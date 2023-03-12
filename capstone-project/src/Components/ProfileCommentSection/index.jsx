import React, {useState, useEffect, useMemo} from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import { getProfileMovieComments } from "../../Platform/Comment";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import {FaArrowRight} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {ImCross} from "react-icons/im";

export default function ProfileCommentSection(props) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [renderOnDelete, setRenderOnDelete] = useState(false);
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchData = async () => {
            await handleAllComments(itemOffset, itemsPerPage, props.id);
            setPageCount(Math.ceil(total / itemsPerPage));
            console.log(currentItems);
          };
          fetchData();
    }, [itemOffset, total, renderOnDelete, props]) 

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };

    const handleAllComments = async (pageNumber, pageSize, profileID) => {
        try {
            const result = await getProfileMovieComments(profileID, pageNumber, pageSize);
            setTotal(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

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
            return (`${years}y ago`);
        } else if (months > 0) {
            return (`${months}m ago`);
        } else if (days > 0) {
            return (`${days}d ago`);
        } else if (hours > 0) {
            return (`${hours}h ago`);
        } else if (minutes > 0) {
            return (`${minutes}m ago`);
        } else {
            return (`Just now`);
        }
    };

    return (
        <>
            {currentItems.length === 0 ? 
            <div className="noCommentsYetProfile"><h2>You dont have comments yet</h2></div>:
                currentItems.map((e, i) => {
                    let editedAt = handleEditedAt(e.createdAt);
                    return (
                        <div key={i} className="profileComment">
                            <div className="profileCommentBody">
                                <h1>{editedAt}</h1>
                                <textarea name="profileComment" className="profileCommentText" id={i} rows="4" readOnly>{e.text}</textarea>
                                <div className="profileCommentIcons">
                                    <FaArrowRight className="profileCommentIcon"/>
                                    <AiFillEdit onClick={() => handleCommentEdit(i)} className="profileCommentIcon"/>
                                    <ImCross className="profileCommentIcon"/>
                                </div>
                                <div className="profileCommentBtnBox">
                                    <button id={`commentBtn${i}`} className="commentBtn">Edit</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {pageCount > 1 ?
            <ReactPaginate
            nextLabel={<IoIosArrowDroprightCircle className="paginationArrows"/>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<IoIosArrowDropleftCircle className="paginationArrows"/>}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            />: null}
        </>
    );
}