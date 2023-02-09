import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context/Context";
import { useNavigate } from 'react-router-dom';
import MainPic from "../../assets/images/BackgroundImages/ErrorPageMain.jpg";
import MainPicture from "../../Components/MainPicture";
import { ROUTE_NAMES } from "../../Routes";

export default function ErrorPage() {
  const {setIsLoading} = useGlobalContext();

    const [hasClass, setHasClass] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        const timeout1 = setTimeout(() => {
          setHasClass(true);
        }, 5000);
        const timeout2 = setTimeout(() => {
            navigate(ROUTE_NAMES.HOME);
          }, 8000);
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