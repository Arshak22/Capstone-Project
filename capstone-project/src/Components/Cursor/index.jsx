import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Cursor() {
    const[mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }

    }, []);


    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        }
    }

    return(
        <motion.div 
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        />
    );
}