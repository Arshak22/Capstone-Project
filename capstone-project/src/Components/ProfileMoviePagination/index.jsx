import {React, useEffect, useState} from "react";
import "./style.css";
import { getAllMovies } from "../../Platform/Watchables";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ReactPaginate from "react-paginate";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function ProfileMoviePagination(props) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const itemsPerPage = 9;

    useEffect(() => {
        setLoaded(false);
        if(props.page === "Watchlist") {
            getMovieList(itemOffset, itemsPerPage);
        } else if(props.page === "Favourites") {
            // getMovieList(itemOffset, itemsPerPage);
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
              setLoaded(true);
            }, 1500)
        } catch (e) {
            console.log(e);
        }
    };

    return (
    <>
        <div className="ProfilePaginationList">
            {currentItems.map((elem, index) => {
                const shortName = elem.name.length > 25 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 25)) + "..." : elem.name;
                const date = new Date(elem.releaseDate);
                const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                return (
                    <div className="listItem" key={index}>
                        {elem.mainBackdropPath ? <LazyLoadImage src={`https://www.themoviedb.org/t/p/original/${elem.mainBackdropPath}`} alt={elem.mainBackdropPath} effect="blur" className="paginationMovie"/>: null}
                        <div className="listItemInfo" style={{background: `url(https://www.themoviedb.org/t/p/original/${elem.mainBackdropPath}`}}>
                            <div className="listItemName">
                                <h3>{shortName}</h3>
                                <h5>{dateString}</h5>
                            </div>
                            <div className="listItemRating">
                                <p>{elem.rating}</p>
                            </div>
                        </div>
                    </div>
                );
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