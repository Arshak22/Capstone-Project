import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Cursor() {
    const[mousePosition, setMousePosition] = useState({
        x: 900,
        y: 0,
    });
    const [cursorVariant] = useState("default");
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
            setOpacity(1);
        }
        const mouseOut = () => {
            setOpacity(0);
        }
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseout", mouseOut);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseout", mouseOut);
        }
    }, []);


    const variants = {
        default: {
            x: mousePosition.x - 7.5,
            y: mousePosition.y - 7.5,
            transition: {
                duration: 0.1,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div 
        className="cursor"
        style={{
            opacity,
            transition: "opacity 0.6s ease-out"
        }}
        variants={variants}
        animate={cursorVariant}
        />
    );
}