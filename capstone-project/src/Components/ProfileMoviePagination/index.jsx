import {React, useEffect, useState} from "react";
import "./style.css";
import { getProfileWatchlist } from "../../Platform/Watchlist";
import { getProfileFavorites } from "../../Platform/Favorites";
import { addToWatchlist, deleteFromWatchlist } from "../../Platform/Watchlist";
import { addToFavorite, deleteFavorite } from "../../Platform/Favorites";
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
    const [renderOnDelete, setRenderOnDelete] = useState(false);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    useEffect(() => {
            if(props.page === "Watchlist") {
                getWatchlist(itemOffsetWatchlist, itemsPerPage, id, token);
                setPageCount(Math.ceil(totalWatchlist / itemsPerPage));
            } else if(props.page === "Favourites") {
                getFavourites(itemOffsetFavorite, itemsPerPage, id, token);
                setPageCount(Math.ceil(totalFavorite / itemsPerPage));
            }
            setRenderOnDelete(false);
    }, [itemOffsetWatchlist, itemOffsetFavorite, totalWatchlist, totalFavorite, props, renderOnDelete]);

    const handlePageClickWatchlist = (event) => {
        const newOffset = event.selected;
        setItemOffsetFavorite(0);
        setItemOffsetWatchlist(newOffset);
    };

    const handlePageClickFavorite = (event) => {
        const newOffset = event.selected;
        setItemOffsetWatchlist(0);
        setItemOffsetFavorite(newOffset);
    };

    const getWatchlist = async (pageNumber, pageSize, id, token) => {
        try {
            const result = await getProfileWatchlist(pageNumber, pageSize, id, token);
            setTotalWatchlist(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    const getFavourites = async (pageNumber, pageSize, id, token) => {
        try {
            const result = await getProfileFavorites(pageNumber, pageSize, id, token);
            setTotalFavorite(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    const handleWatchlistAdd = async (movieID) => {
        try {
            await addToWatchlist(id, movieID, token);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFavoriteAdd = async (movieID) => {
        try {
            await addToFavorite(id, movieID, token);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteWatchlistItem = async (movieID) => {
        try {
            await deleteFromWatchlist(id, movieID, token);
            setRenderOnDelete(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteFavoriteItem = async (movieID) => {
        try {
            await deleteFavorite(id, movieID, token);
            setRenderOnDelete(true);
        } catch (error) {
            console.log(error);
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
                            {props.page === "Watchlist" ? <><FaHeart onClick={() => handleFavoriteAdd(elem.id)} className="listItemIcon"/> <FaTrashAlt onClick={() => handleDeleteWatchlistItem(elem.id)} className="listItemIcon"/></>: <><FaPlus onClick={() => handleWatchlistAdd(elem.id)} className="listItemIcon"/>
                            <FaTrashAlt onClick={() => handleDeleteFavoriteItem(elem.id)} className="listItemIcon"/></>}
                        </div>
                        <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                        <div className="listItemInfo" style={{background: `url(${backdrop})`}}>
                            <div className="listItemName">
                                <h3>{shortName}</h3>
                                <h5>{dateString}</h5>
                            </div>
                            <div className="listItemRating">
                                <img src={Star} alt="star"/>
                                {elem.rating !== 0 ? <p>{Math.floor(elem.rating * 10) / 10}</p>: <p>NR</p>}
                            </div>
                        </div>
                        </NavLink>
                    </div>
                );
            })}
        </div>
        {props.page === "Watchlist" ?
        pageCount > 1 ?
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
        activeClassName="activeWatchlist"
        renderOnZeroPageCount={null}
      />: null:
      pageCount > 1 ?
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
        activeClassName="activeFavorite"
        renderOnZeroPageCount={null}
      />: null
    }
    </>}
    </>
    );
}