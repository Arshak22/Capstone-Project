import {React, useEffect, useState} from "react";
import "./style.css";
import { getAllMovies, getAllSeries } from "../../Platform/Watchables";

import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ReactPaginate from "react-paginate";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import DefaultBackdrop from "../../assets/images/BackgroundImages/DefaultBackdrop.png";
import Star from "../../assets/images/Icons/star.png"

export default function ProfileMoviePagination(props) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffsetWatchlist, setItemOffsetWatchlist] = useState(0);
    const [itemOffsetFavorite, setItemOffsetFavorite] = useState(0);
    const [totalWatchlist, setTotalWatchlist] = useState(0);
    const [totalFavorite, setTotalFavorite] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        if(props.page === "Watchlist") {
            // setCurrentItems([]);
            getWatchlist(itemOffsetWatchlist, itemsPerPage);
            setPageCount(Math.ceil(totalWatchlist / itemsPerPage));
        } else if(props.page === "Favourites") {
            setCurrentItems([]);
            // getFavourites(itemOffsetFavorite, itemsPerPage);
            // setPageCount(Math.ceil(totalFavorite / itemsPerPage));
        }
    }, [itemOffsetWatchlist, itemOffsetFavorite, totalWatchlist, totalFavorite, props]);

    const handlePageClickWatchlist = (event) => {
        const newOffset = event.selected;
        setItemOffsetWatchlist(newOffset);
    };

    const handlePageClickFavorite = (event) => {
        const newOffset = event.selected;
        setItemOffsetFavorite(newOffset);
    };

    const getWatchlist = async (pageNumber, pageSize) => {
        try {
            const result = await getAllMovies(pageNumber, pageSize);
            setTotalWatchlist(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    const getFavourites = async (pageNumber, pageSize) => {
        try {
            const result = await getAllSeries(pageNumber, pageSize);
            setTotalFavorite(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    return (
    <>
    {currentItems.length === 0 ? <h1 className="emptyListTitle">Your list is empty</h1>:
    <>
        <div className="ProfilePaginationList">
            {currentItems.map((elem, index) => {
                const shortName = elem.name.length > 25 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 25)) + "..." : elem.name;
                const date = new Date(elem.releaseDate);
                const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                let backdrop = DefaultBackdrop;
                if (elem.mainBackdropPath) {
                    backdrop = `https://www.themoviedb.org/t/p/original/${elem.mainBackdropPath}`;
                } else if(elem.backdropPaths[0]) {
                    backdrop = `https://www.themoviedb.org/t/p/original/${elem.backdropPaths[0]}`;
                }
                return (
                    <div className="listItem" key={index}>
                        <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                            <LazyLoadImage src={backdrop} alt={backdrop} effect="blur" className="paginationMovie"/>
                        </NavLink>
                        <div className="listItemIcons">
                            {props.page === "Watchlist" ? <FaHeart className="listItemIcon"/>: <FaPlus className="listItemIcon"/>}
                            <FaTrashAlt className="listItemIcon"/>
                        </div>
                        <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                        <div className="listItemInfo" style={{background: `url(${backdrop})`}}>
                            <div className="listItemName">
                                <h3>{shortName}</h3>
                                <h5>{dateString}</h5>
                            </div>
                            <div className="listItemRating">
                                <img src={Star} alt="star"/>
                                <p>{Math.floor(elem.rating * 10) / 10}</p>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                );
            })}
        </div>
        {props.page === "Watchlist" ?
        <ReactPaginate
        nextLabel={<IoIosArrowDroprightCircle className="paginationArrows"/>}
        onPageChange={handlePageClickWatchlist}
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
        renderOnZeroPageCount={null}
      />:
      <ReactPaginate
        nextLabel={<IoIosArrowDroprightCircle className="paginationArrows"/>}
        onPageChange={handlePageClickFavorite}
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
        renderOnZeroPageCount={null}
      />
    }
    </>}
    </>
    );
}