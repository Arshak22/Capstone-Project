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
    const location = useLocation();
    useEffect(() => {
        setLoaded(true);
        setTimeout(() => {
            setLoaded(false);
        }, 50000)
    }, [location.pathname])
    return (
        <>
        {loaded ? <PreLoader/>:
            <>
                <Cursor/>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        }   
        </>
    )
}