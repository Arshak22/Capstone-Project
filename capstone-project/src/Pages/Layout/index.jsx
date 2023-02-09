import React from "react";
import {Outlet} from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import PreLoader from "../../Components/PreLoader";
import Cursor from "../../Components/Cursor";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Layout() {
    const {isLoading} = useGlobalContext();

    return (
        <>
        <Cursor/>
        {isLoading ? <PreLoader/>:<Header/>}
            <Outlet/>
            <Footer/>
        </>
    )
}