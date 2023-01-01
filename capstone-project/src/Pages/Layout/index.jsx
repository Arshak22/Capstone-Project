import React from "react";
import {Outlet} from "react-router-dom";
import Cursor from "../../Components/Cursor";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Layout() {
    return (
        <>
            <Cursor/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}