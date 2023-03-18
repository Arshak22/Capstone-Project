import React, { useEffect } from "react";
import {Outlet, useLocation} from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import PreLoader from "../../Components/PreLoader";
import Cursor from "../../Components/Cursor";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Layout() {
    const location = useLocation();
    const {isLoading, setIsLoading} = useGlobalContext();

    useEffect(() => {
        setIsLoading(true);
    }, [location.pathname]);

    return (
        <>
        <Cursor/>
        {isLoading ? <PreLoader/>:<Header/>}
            <Outlet/>
            <Footer/>
        </>
    )
}