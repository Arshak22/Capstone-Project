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
  const itemsPerPage = 5;

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
      for (let i = index; i < ratingRef.current.length; i++) {
        let intervalId;
          if (rating < 70) {
              intervalId = setInterval(() => {
                  rating++;
                  ratingRef.current[i].style.background = `conic-gradient(rgb(299 9 20) ${rating}%, transparent 0 100%)`;
                  if (rating === 70) {
                      clearInterval(intervalId);
                  }
              }, 5);
          }
          return () => clearInterval(intervalId);
      }
      return rating;
    })
  }

  return (
    <>
        <div className="paginationList">
            {currentItems.map((elem, index) => {
                return (
                  <div className="paginationBox">
                    <div className="paginationMovieBlock" key={index}>
                            {elem.posterPath ? <img src={elem.posterPath} alt={elem.posterPath} className="paginationMovie" />: null}
                            <div className="paginationMovieBlockPlayer">
                              <NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                    <polygon className="triangle" fill="none" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1"></polygon>
                                    <circle className="circle" fill="none" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                  </svg>
                              </NavLink>
                            </div>
                            <div className="paginationMovieBlockSocialInfo">
                              <div className="ratingSmall" ref={(elem) => ratingRef.current[index] = elem}>
                                  <span>{elem.rating * 10}<small>%</small></span>
                              </div>
                            </div>
                    </div>
                    <div className="paginationMovieBlockDescription">
                      <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end>{elem.name}</NavLink></h6>
                      <span>{elem.releaseDate}</span>
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