import React, {useState, useEffect} from "react";
import "./style.css";
import ReactPaginate from "react-paginate";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import {FaArrowRight} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {ImCross} from "react-icons/im";

export default function MovieCommentSection() {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const itemsPerPage = 30;

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
    return (
        <div className="MovieCommentSection">
            <h2 className="CommentSectionTitle">Comment Section</h2>
            <div className="mainCommentPost">
                <textarea name="movieCommentMain" className="movieCommentMain" rows="3" placeholder="Write a Comment"></textarea>
                <div>
                    <button className="mainCommentPostBtn">Post</button>
                    <h4 className="commentError">You need to be loged in</h4>
                </div>
            </div>
        </div>
    );
}