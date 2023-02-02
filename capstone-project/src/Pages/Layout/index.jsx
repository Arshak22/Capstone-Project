import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import PreLoader from "../../Components/PreLoader";
import Cursor from "../../Components/Cursor";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../Context/Context";

export default function Layout() {
    const {isLoading, setIsLoading} = useGlobalContext();
    const [loaded, setLoaded] = useState(false);
    const [preLoaderTime, setPreLoaderTime] = useState(5000);
    const location = useLocation();
    useEffect(() => {
        setIsLoading(true);
        if(location.pathname === "/") {
            setPreLoaderTime(5000)
        } else if(location.pathname === "/movies" || location.pathname === "/tv-shows") {
            setPreLoaderTime(3000);
        } else {
            setPreLoaderTime(1000);
        }
        setLoaded(false);
        setTimeout(() => {
            setLoaded(true);
        }, preLoaderTime)
    }, [location.pathname, isLoading])
    return (
        <>
        <Cursor/>
        {/* {isLoading ? <PreLoader/>:
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        } */}
        {loaded ?
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </> : <PreLoader/>            
        }   
        </>
    )
}