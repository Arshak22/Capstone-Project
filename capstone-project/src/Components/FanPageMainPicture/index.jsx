import {React, useState, useEffect} from "react";
import "./style.css";

export default function FanPageMainPicture() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 0) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`magicalSplit ${isActive ? "active" : ""}`}>
            <div className={`magicalSplitInner ${isActive ? "active" : ""}`}>
                <h1>Enter The World of Magic</h1>
            </div>
        </div>
    );
}