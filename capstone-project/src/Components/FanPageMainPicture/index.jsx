import {React, useState, useEffect} from "react";
import "./style.css";

export default function FanPageMainPicture() {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 3000);
    }, [])
    return (
        <div className={`magicalSplit ${active ? "active" : ""}`}>
            <div className={`magicalSplitInner ${active ? "active" : ""}`}>
                <h1>Enter The World of Magic</h1>
            </div>
        </div>
    );
}