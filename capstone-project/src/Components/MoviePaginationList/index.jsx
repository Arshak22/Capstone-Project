import {React, useEffect, useState} from "react";
import "./style.css"
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useGlobalContext } from "../../Context/Context";
import ReactPaginate from "react-paginate";
import { getAllMovies, getAllSeries, getLatestWatchables, getLatestMovies, getLatestSeries, getPopularWatchables, getPopularMovies, getPopularSeries, getUpcomingMovies, getUpcomingSeries } from "../../Platform/Watchables";
import { searchWatchable, userSearchWatchable, searchMovieByGenre, searchSeriesByGenre, searchMovieByReleaseYear, searchSeriesByReleaseYear } from "../../Platform/Search";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import DefaultPoster from "../../assets/images/BackgroundImages/DefaultPoster.jpg";

//icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function MoviePaginationList() {
  const {type} = useParams();
  const {setIsLoading} = useGlobalContext();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const itemsPerPage = 30;
  const navigate = useNavigate();

  useEffect(() => {
    if(type.startsWith("searchItem:")) {
      const searchItem = type.split("searchItem:")[1].split("/")[0];
      if(localStorage.getItem("email")) {
          handleUserSearchWatchable(localStorage.getItem("email"), itemOffset, itemsPerPage, searchItem);
      }
    }
  }, []);


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
    } else if(type === "film-latest") {
      getLatestMovieList(itemOffset, itemsPerPage);
    } else if(type === "series-latest") {
      getLatestSeriesList(itemOffset, itemsPerPage);
    } else if(type === "film-popular") {
      getPopularMovieList(itemOffset, itemsPerPage);
    } else if(type === "series-popular") {
      getPopularSeriesList(itemOffset, itemsPerPage);
    } else if(type === "film-upcoming") {
      getUpcomingMovieList(itemOffset, itemsPerPage);
    } else if(type === "series-upcoming") {
      getUpcomingSeriesList(itemOffset, itemsPerPage);
    } else if(type.startsWith("filmGenre:")) {
      const filmGenre = type.split("filmGenre:")[1].split("/")[0];
      handleSearchMovieGenre(itemOffset, itemsPerPage, filmGenre);
    } else if(type.startsWith("seriesGenre:")) {
      const seriesGenre = type.split("seriesGenre:")[1].split("/")[0];
      handleSearchSeriesGenre(itemOffset, itemsPerPage, seriesGenre);
    } else if(type.startsWith("filmReleaseYear:")) {
      const filmReleaseYear = type.split("filmReleaseYear:")[1].split("/")[0];
      handleSearchMovieYear(itemOffset, itemsPerPage, filmReleaseYear);
    } else if(type.startsWith("seriesReleaseYear:")) {
      const seriesReleaseYear = type.split("seriesReleaseYear:")[1].split("/")[0];
      handleSearchSeriesYear(itemOffset, itemsPerPage, seriesReleaseYear);
    } else if(type.startsWith("searchItem:")) {
      const searchItem = type.split("searchItem:")[1].split("/")[0];
      handleSearchWatchable(itemOffset, itemsPerPage, searchItem);
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
        navigate("/error-page");
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
        navigate("/error-page");
    }
  };

  const getLatestMovieList = async (pageNumber, pageSize) => {
    try {
        const result = await getLatestMovies(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  }; 

  const getLatestSeriesList = async (pageNumber, pageSize) => {
    try {
        const result = await getLatestSeries(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        navigate("/error-page");
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
        navigate("/error-page");
    }
  };

  const getPopularMovieList = async (pageNumber, pageSize) => {
    try {
        const result = await getPopularMovies(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const getPopularSeriesList = async (pageNumber, pageSize) => {
    try {
        const result = await getPopularSeries(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        navigate("/error-page");
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
        navigate("/error-page");
    }
  };

  const getUpcomingMovieList = async (pageNumber, pageSize) => {
    try {
        const result = await getUpcomingMovies(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const getUpcomingSeriesList = async (pageNumber, pageSize) => {
    try {
        const result = await getUpcomingSeries(pageNumber, pageSize);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        setTimeout(() => {
          setLoaded(true);
        }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const handleSearchWatchable = async (pageNumber, pageSize, query) => {
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
        navigate("/error-page");
    }
  };

  const handleUserSearchWatchable = async (email, pageNumber, pageSize, query) => {
    try {
        const result = await userSearchWatchable(email, pageNumber, pageSize, query);
        setTotal(result.data.totalElements);
        setCurrentItems(result.data.content);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const handleSearchMovieGenre = async (pageNumber, pageSize, genre) => {
    try {
      const result = await searchMovieByGenre(pageNumber, pageSize, genre);
      setTotal(result.data.totalElements);
      let tempCurrent = [];
      result.data.content.forEach(elem => {
        if(!tempCurrent.some(item => JSON.stringify(item) === JSON.stringify(elem))) {
          tempCurrent.push(elem);
        }
      });
      setCurrentItems(tempCurrent);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const handleSearchSeriesGenre = async (pageNumber, pageSize, genre) => {
    try {
      const result = await searchSeriesByGenre(pageNumber, pageSize, genre);
      setTotal(result.data.totalElements);
      let tempCurrent = [];
      result.data.content.forEach(elem => {
        if(!tempCurrent.some(item => JSON.stringify(item) === JSON.stringify(elem))) {
          tempCurrent.push(elem);
        }
      });
      setCurrentItems(tempCurrent);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const handleSearchMovieYear = async (pageNumber, pageSize, year) => {
    try {
      const result = await searchMovieByReleaseYear(pageNumber, pageSize, year);
      setTotal(result.data.totalElements);
      setCurrentItems(result.data.content);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  const handleSearchSeriesYear = async (pageNumber, pageSize, year) => {
    try {
      const result = await searchSeriesByReleaseYear(pageNumber, pageSize, year);
      setTotal(result.data.totalElements);
      setCurrentItems(result.data.content);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
    } catch (e) {
        navigate("/error-page");
    }
  };

  return (
    <>
    {currentItems.length > 0 ?
        <div className="paginationList">
            {currentItems.map((elem, index) => {
              const date = new Date(elem.releaseDate);
              const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                return (
                  <div className="paginationBox" key={index}>
                    <div className="paginationMovieBlock">
                      {!loaded ? <Skeleton variant="rectangular" duration={2} animation="wave" className="paginationMovieSkeleton"/>: elem.posterPath ? <LazyLoadImage src={`https://www.themoviedb.org/t/p/original${elem.posterPath}`} alt={elem.posterPath} effect="blur" className="paginationMovie"/>: <LazyLoadImage src={DefaultPoster} alt={DefaultPoster} effect="blur" className="paginationMovie"/>}
                            <div className="paginationMovieBlockPlayer">
                              <div className="playerBox">
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                      <polygon className="triangle" fill="none" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1"></polygon>
                                      <circle className="circle" fill="none" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                    </svg>
                                </NavLink>
                              </div>
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
        </div>: <h2 className="searchResultNone">Sorry no movies with this search</h2>}
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
    </>
  );
}