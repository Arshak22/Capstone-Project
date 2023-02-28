import React, {useState, useEffect} from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import {FaArrowRight} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {ImCross} from "react-icons/im";

export default function ProfileCommentSection() {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        setCurrentItems([
            {
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptates repudiandae, tempore rerum ex possimus corporis ab maiores. Nihil reprehenderit, blanditiis culpa distinctio ipsum maxime mollitia dolore iste accusamus?"
            },
            {
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptates repudiandae, tempore rerum ex possimus corporis ab maiores. Nihil reprehenderit, blanditiis culpa distinctio ipsum maxime mollitia dolore iste accusamus?"
            },
            {
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates."
            }
        ]);
        setPageCount(Math.ceil(total / itemsPerPage));
    }, [itemOffset, total])

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
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
    }

    return (
        <>
            {currentItems.length !== 0 ? 
                currentItems.map((e, i) => {
                    return (
                        <div key={i} className="profileComment">
                            <div className="profileCommentBody">
                                <h1>{e.name}</h1>
                                <h4>{e.date}</h4>
                                <textarea name="profileComment" className="profileCommentText" id={i} rows="4" readOnly>{e.comment}</textarea>
                                <div className="profileCommentIcons">
                                    <FaArrowRight className="profileCommentIcon"/>
                                    <AiFillEdit onClick={() => handleCommentEdit(i)} className="profileCommentIcon"/>
                                    <ImCross className="profileCommentIcon"/>
                                </div>
                                <button id={`commentBtn${i}`} className="commentBtn">Edit</button>
                            </div>
                        </div>
                    )
                })
            : <div className="noCommentsYetProfile"><h2>You dont have comments yet</h2></div>}
            {pageCount <= 1 ?
            null:
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
            />        
            }
        </>
    );
}