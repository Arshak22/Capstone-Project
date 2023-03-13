import React, {useState, useEffect} from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import ProfileComment from "../ProfileComment";
import { getProfileMovieComments } from "../../Platform/Comment";
import { useGlobalContext } from "../../Context/Context";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function ProfileCommentSection(props) {
    const {renderOnCommentChange, setRenderOnCommentChange} = useGlobalContext();
    const [currentItems, setCurrentItems] = useState([]);
    const MemoizedComment = React.memo(ProfileComment);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const itemsPerPage = 3;
    const token = localStorage.getItem("token");

    useEffect(() => {
        handleAllComments(itemOffset, itemsPerPage, props.id);
        setPageCount(Math.ceil(total / itemsPerPage));
    }, [itemOffset, total, renderOnCommentChange, props]) 

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

    return (
        <>
            {currentItems.length === 0 ? 
            <div className="noCommentsYetProfile"><h2>You dont have comments yet</h2></div>:
                currentItems.map((e, i) => {
                    return (
                        <div key={i} className="profileComment">
                            <MemoizedComment commentInfo={e} token={token}/>
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