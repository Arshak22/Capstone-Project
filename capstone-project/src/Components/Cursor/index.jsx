import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Cursor() {
    const[mousePosition, setMousePosition] = useState({
        x: -20,
        y: 0,
    });
    const [cursorVariant] = useState("default");

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
            x: mousePosition.x - 10,
            y: mousePosition.y - 10
        }
    }

    return (
        <motion.div 
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        />
    );
}