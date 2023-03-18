import React, {useState, useEffect} from "react";
import "./style.css";
import { getAllProfiles, deleteProfile } from "../../Platform/Profiles";
import ReactPaginate from "react-paginate";

import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function AllUsers() {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const itemsPerPage = 9;
    const [renderOnDelete, setRenderOnDelete] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        getUsersList(itemOffset, itemsPerPage);
        setPageCount(Math.ceil(total / itemsPerPage));
        setRenderOnDelete(false);
    }, [itemOffset, total, renderOnDelete]);

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };

    const getUsersList = async (pageNumber, pageSize) => {
        try {
            const result = await getAllProfiles(pageNumber, pageSize, token);
            setTotal(result.data.totalElements);
            setCurrentItems(result.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    const handleDeleteProfle = async (id) => {
        try {
            await deleteProfile(id, token);
            setRenderOnDelete(true);
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <>
        {currentItems.length === 0 ? <h1 className="emptyListTitle">Users List is Empty</h1>:
        <>
            <div className="allUsersSection">
                {currentItems.map((elem, index) => {
                    return (
                        <div key={index} className="userListUser">
                            <h1>{elem.firstName} {elem.lastName}</h1>
                            <h2>{elem.email}</h2>
                            {elem.admin ? <h2>Role: Admin</h2>: <h2>Role: User</h2>}
                            {elem.enabled ? <h2>Account Verified</h2>: <h2>Account Not Verified</h2>}
                            <div className="userListDelete">
                                <FaTrashAlt className="listItemIcon" onClick={() => handleDeleteProfle(elem.id)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
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
                    activeClassName="activeWatchlist"
                    renderOnZeroPageCount={null}
                />: null
                }
            </>
        }
        </>
    );
}