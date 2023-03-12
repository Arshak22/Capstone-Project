import React, {useState, useEffect} from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import Comment from "../Comment";

import { addComment, updateComment, deleteComment, getAllMovieComments } from "../../Platform/Comment";
import { useGlobalContext } from "../../Context/Context";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export default function MovieCommentSection(props) {
    const MemoizedComment = React.memo(Comment);
    const {renderOnCommentChange, setRenderOnCommentChange} = useGlobalContext();
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [tempComment, setTempComment] = useState("");
    const [commentPostError, setCommentPostError] = useState();
    const [total, setTotal] = useState(0);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const itemsPerPage = 4;

    useEffect(() => {
        handleAllComments(props.movieID, itemOffset, itemsPerPage);
        setPageCount(Math.ceil(total / itemsPerPage));
    }, [itemOffset, total, renderOnCommentChange])

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };

    const handleNewComment = (e) => {
        setTempComment(e.target.value);
    };

    const handleAllComments = async (movieID, pageNumber, pageSize) => {
        try {
            const result = await getAllMovieComments(movieID, pageNumber, pageSize);
            setTotal(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    const handleNewCommentPost = async () => {
        try {
            if (tempComment) {
                const postCommentBody = {
                    "commenterId": id,
                    "text": tempComment,
                    "watchableId": props.movieID
                }
                await addComment(postCommentBody, token);
                setItemOffset(0);
                setTempComment("");
                setRenderOnCommentChange(!renderOnCommentChange);
            }
        } catch (error) {
            setCommentPostError("You need to be loged in!");
        }
    };

    return (
        <div className="MovieCommentSection">
            <h2 className="CommentSectionTitle">Comment Section</h2>
            <div className="mainCommentPost">
                <textarea onChange={handleNewComment} name="movieCommentMain" value={tempComment} className="movieCommentMain" rows="3" placeholder="Write a Comment"></textarea>
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
                                <MemoizedComment commenterID={elem.commenterId} createdAt={elem.createdAt} comment={elem.text} token={token} id={id} commentID={elem.id} watchableID={elem.watchableId} renderOnCommentChange={renderOnCommentChange}/>
                            </div>
                        );
                    })
                : <div className="firstToComment"><h2>Be first to comment</h2></div>}
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
        </div>
    );
}