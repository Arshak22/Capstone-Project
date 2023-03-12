import React, {useState, useEffect} from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import Comment from "../Comment";

import { addComment, updateComment, deleteComment, getAlllMovieComments } from "../../Platform/Comment";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export default function MovieCommentSection(props) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [tempComment, setTempComment] = useState();
    const [commentPostError, setCommentPostError] = useState();
    const [total, setTotal] = useState(0);
    const itemsPerPage = 30;

    useEffect(() => {
        setCurrentItems([
            {
                id: 1,
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptates repudiandae, tempore rerum ex possimus corporis ab maiores. Nihil reprehenderit, blanditiis culpa distinctio ipsum maxime mollitia dolore iste accusamus?"
            },
            {
                id: 2,
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptates repudiandae, tempore rerum ex possimus corporis ab maiores. Nihil reprehenderit, blanditiis culpa distinctio ipsum maxime mollitia dolore iste accusamus?"
            },
            {
                id: 3,
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates."
            },
            {
                id: 4,
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptates repudiandae, tempore rerum ex possimus corporis ab maiores. Nihil reprehenderit, blanditiis culpa distinctio ipsum maxime mollitia dolore iste accusamus?"
            },
            {
                id: 5,
                name: "Name",
                date: "Jan 20, 2023",
                comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam vero, excepturi aut tempore assumenda officia corporis totam id quod error quam commodi mollitia quo sapiente eius labore temporibus voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptates repudiandae, tempore rerum ex possimus corporis ab maiores. Nihil reprehenderit, blanditiis culpa distinctio ipsum maxime mollitia dolore iste accusamus?"
            },
        ]);
        setPageCount(Math.ceil(total / itemsPerPage));
    }, [itemOffset, total])

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };

    const handleNewComment = (e) => {
        setTempComment(e.target.value);
    };

    const handleNewCommentPost = async () => {
        try {
            const token = localStorage.getItem("token");
            const id = localStorage.getItem("id");
            const postCommentBody = {
                "commenterId": id,
                "text": tempComment,
                "watchableId": props.movieID
            }
            console.log(postCommentBody);
            await addComment(postCommentBody, token);
        } catch (error) {
            setCommentPostError("You need to be loged in!");
        }
    };

    return (
    <>
        <div className="MovieCommentSection">
            <h2 className="CommentSectionTitle">Comment Section</h2>
            <div className="mainCommentPost">
                <textarea onChange={handleNewComment} name="movieCommentMain" className="movieCommentMain" rows="3" placeholder="Write a Comment"></textarea>
                <div>
                    <button onClick={handleNewCommentPost} className="mainCommentPostBtn">Post</button>
                    {commentPostError ? <h4 className="commentError">{commentPostError}</h4>: null}
                </div>
            </div>
            <div className="Comments">
                {currentItems.length !== 0 ? 
                    currentItems.map((elem, index) => {
                        return (
                            <div key={index}>
                                <Comment name={elem.name} date={elem.date} comment={elem.comment} id={elem.id} />
                            </div>
                        );
                    })
                : <div className="firstToComment"><h2>Be first to comment</h2></div>}
            </div>
        </div>
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