import {React, useEffect, useState} from "react";
import "./style.css"
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useGlobalContext } from "../../Context/Context";

import ReactPaginate from "react-paginate";
import { getAllMovies, getAllSeries, getLatestWatchables, getPopularWatchables } from "../../Platform/Watchables";
import { searchWatchable } from "../../Platform/Search";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import DefaultPoster from "../../assets/images/BackgroundImages/DefaultPoster.jpg";

export default function MoviePaginationList() {
  const {type} = useParams();
  const {setIsLoading} = useGlobalContext();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const itemsPerPage = 30;

  useEffect(() => {
    setLoaded(false);
    if(type === "film") {
      getMovieList(itemOffset, itemsPerPage);
    } else if(type === "show") {
      getTVShowsList(itemOffset, itemsPerPage);
    } else if(type === "latest") {
      getLatestList(itemOffset, itemsPerPage);
    } else if(type === "popular") {
      getPopularList(itemOffset, itemsPerPage);
    } else if(type.startsWith("searchItem:")) {
      const searchItem = type.split("searchItem:")[1].split("/")[0];
      console.log(searchItem);
      handlesearchWatchable(itemOffset, itemsPerPage, searchItem);
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
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        console.log(e);
    }
  };

  const getLatestList = async (pageNumber, pageSize) => {
    try {
        const result = await getLatestWatchables(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        console.log(e);
    }
  };

  const getPopularList = async (pageNumber, pageSize) => {
    try {
        const result = await getPopularWatchables(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        console.log(e);
    }
  };

  const getTVShowsList = async (pageNumber, pageSize) => {
    try {
        const result = await getAllSeries(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        console.log(e);
    }
  };

  const handlesearchWatchable = async (pageNumber, pageSize, query) => {
    try {
      const result = await searchWatchable(pageNumber, pageSize, query);
      setTotal(result.data.totalElements);
      setCurrentItems(result.data.content);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
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
                      {!loaded ? <Skeleton variant="rectangular" duration={2} animation="wave" className="paginationMovieSkeleton"/>: elem.posterPath ? <LazyLoadImage src={`https://www.themoviedb.org/t/p/original${elem.posterPath}`} alt={elem.posterPath} effect="blur" className="paginationMovie"/>: <LazyLoadImage src={DefaultPoster} alt={DefaultPoster} effect="blur" className="paginationMovie"/>}
                            <div className="paginationMovieBlockPlayer">
                              <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                    <polygon className="triangle" fill="none" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1"></polygon>
                                    <circle className="circle" fill="none" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                  </svg>
                              </NavLink>
                            </div>
                            <div className="paginationMovieBlockSocialInfo">
                              <div className="ratingSmall" style={{backgroundImage: `conic-gradient(rgb(299 9 20) ${Math.floor(elem.rating * 10)}%, transparent 0 100%)`}}>
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