import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import PreLoader from "../../Components/PreLoader";
import Cursor from "../../Components/Cursor";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useEffect } from "react";

export default function Layout() {
    const [loaded, setLoaded] = useState(true);
    const [preLoaderTime, setPreLoaderTime] = useState(0);
    const location = useLocation();
    useEffect(() => {
        (location.pathname === "/") ? setPreLoaderTime(5000): setPreLoaderTime(3000);
        setLoaded(true);
        console.log(location.pathname)
        setTimeout(() => {
            setLoaded(false);
        }, preLoaderTime)
    }, [location.pathname])
    return (
        <>
        <Cursor/>
        {loaded ? <PreLoader/>:
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        }   
        </>
    )
}