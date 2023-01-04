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
    const [preLoaderTime, setPreLoaderTime] = useState(5000);
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/") {
            setPreLoaderTime(5000)
        } else if(location.pathname === "/movies" || location.pathname === "/tv-shows") {
            setPreLoaderTime(3000);
        } else {
            setPreLoaderTime(1000);
        }
        setLoaded(true);
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