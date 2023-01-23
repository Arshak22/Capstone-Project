import {React, useEffect, useState, useRef} from "react";
import "./style.css"
import ReactPaginate from "react-paginate";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function MoviePaginationList({movies}) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const ratingRef = useRef([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies, ratingRef]);

  useEffect(() => {
    setTimeout(handleRatingFill, 1000);
  }, [currentItems]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % movies.length;
    setItemOffset(newOffset);
  };

  const handleRatingFill = () => {
    currentItems.map((elem, index) => {
      let rating = 0;
      let intervalId;
      for (let i = index; i < ratingRef.current.length; i++) {
          if (rating < elem.rating) {
              intervalId = setInterval(() => {
                  rating++;
                  ratingRef.current[i].style.background = `conic-gradient(rgb(299 9 20) ${rating}%, transparent 0 100%)`;
                  if (rating === elem.rating) {
                      clearInterval(intervalId);
                  }
              }, 20);
          }
          return () => clearInterval(intervalId);
      }
    })
  }

  return (
    <>
        <div className="paginationList">
            {currentItems.map((elem, index) => {
                return (
                  <div className="paginationBox">
                    <div className="paginationMovieBlock" key={index}>
                            {elem.img ? <img src={elem.img} alt={elem.img} className="paginationMovie" />: null}
                            <div className="paginationMovieBlockDescription">
                                
                            </div>
                            <div className="paginationMovieBlockSocialInfo">
                              <div className="ratingSmall" ref={(elem) => ratingRef.current[index] = elem}>
                                  <span>{elem.rating} <small>%</small></span>
                              </div>
                            </div>
                    </div>
                    <div className="paginationMovieBlockDescription">
                      <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end>{elem.title}</NavLink></h6>
                      <span>{elem.duration}</span>
                    </div>
                  </div>
                )
            })}
        </div>
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
    </>
  );
}