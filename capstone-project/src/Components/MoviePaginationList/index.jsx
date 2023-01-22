import {React, useEffect, useState} from "react";
import "./style.css"
import ReactPaginate from "react-paginate";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import VideoIcon from "../../assets/images/Icons/video.png";

export default function MoviePaginationList({movies}) {
//   const {data} = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(movies);
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
    console.log(currentItems);
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % movies.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
        <div className="paginationList">
            {currentItems.map((elem, index) => {
                return (
                    <div className="paginationMovieBlock" key={index}>
                            {elem.img ? <img src={elem.img} alt={elem.img} />: null}
                            <div className="paginationMovieBlockDescription">
                                <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end>{elem.title}</NavLink></h6>
                                <span>{elem.duration}</span>
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end><button className="btn"><img src={VideoIcon} alt="btnIcon" className="btnIcon"/> READ MORE</button></NavLink>
                            </div>
                            <div className="paginationMovieBlockSocialInfo">
                                <ul>
                                    <li className="paginationMovieBlockIcon share">
                                        <span><FaShareAlt className="iconInside"/></span>
                                        <div className="shareBox">
                                            <div>
                                                <FaFacebookF className="shareIcons"/>
                                                <FaTwitter className="shareIcons"/>
                                                <FaPinterestP className="shareIcons"/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="paginationMovieBlockIcon">
                                        <span><FaHeart className="iconInside"/></span>
                                    </li>
                                    <li className="paginationMovieBlockIcon">
                                        <span><FaPlus className="iconInside"/></span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                )
            })}
        </div>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </>
  );
}