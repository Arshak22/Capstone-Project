import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainPic from "../../assets/images/ErrorPageMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function ErrorPage() {
    const [hasClass, setHasClass] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timeout1 = setTimeout(() => {
          setHasClass(true);
        }, 3000);
        const timeout2 = setTimeout(() => {
            navigate('/');
          }, 4000);
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
      }, []);


    return (
        <div className={hasClass ? "main flash": "main"}>
            <MainPicture img={MainPic} headline="Dont even worry about it. Error 404"/>
        </div>
    );
}