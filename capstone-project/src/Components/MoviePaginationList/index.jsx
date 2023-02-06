import {React, useEffect, useState} from "react";
import "./style.css"
import ReactPaginate from "react-paginate";
import { getAllMovies, getAllSeries } from "../../Platform/Watchables";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function MoviePaginationList(type) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const itemsPerPage = 30;

  useEffect(() => {
    if(type.type === "MOVIE") {
      getMovieList(itemOffset, itemsPerPage);
    } else if(type.type === "SERIES") {
      getTVShowsList(itemOffset, itemsPerPage);
    }
    setPageCount(Math.ceil(total / itemsPerPage));
  }, [itemOffset, total]);

  const handlePageClick = (event) => {
    const newOffset = event.selected;
    setItemOffset(newOffset);
  };

  const getMovieList = async (pageNumber, pageSize) => {
    try {
        const result = await getAllMovies(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
    } catch (e) {
        console.log(e);
    }
  };

  const getTVShowsList = async (pageNumber, pageSize) => {
    try {
        const result = await getAllSeries(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <>
        <div className="paginationList">
            {currentItems.map((elem, index) => {
              const date = new Date(elem.releaseDate);
              const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                return (
                  <div className="paginationBox" key={index}>
                    <div className="paginationMovieBlock">
                            {elem.posterPath ? <img src={`https://www.themoviedb.org/t/p/original${elem.posterPath}`} alt={elem.posterPath} className="paginationMovie" />: null}
                            <div className="paginationMovieBlockPlayer">
                              <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                    <polygon className="triangle" fill="none" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1"></polygon>
                                    <circle className="circle" fill="none" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                  </svg>
                              </NavLink>
                            </div>
                            <div className="paginationMovieBlockSocialInfo">
                              <div className="ratingSmall" style={{background: `conic-gradient(rgb(299 9 20) ${Math.floor(elem.rating * 10)}%, transparent 0 100%)`}}>
                                <span>{elem.rating ? Math.floor(elem.rating * 10) + '%' : 'NR'}</span>
                              </div>
                            </div>
                    </div>
                    <div className="paginationMovieBlockDescription">
                      <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>{elem.name}</NavLink></h6>
                      <span>{dateString}</span>
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