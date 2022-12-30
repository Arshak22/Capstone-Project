import React from "react";
import {Outlet} from "react-router-dom";
import Cursor from "../../Components/Cursor";
import Header from "../../Components/Header";

export default function Layout() {
    return (
        <>
            <Cursor/>
            <Header/>
            <Outlet/>
        </>
    )
}