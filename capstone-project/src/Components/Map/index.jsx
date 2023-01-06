import React from "react";
import "./style.css";

export default function Map() {
    return (
        <div className="AUAMap" >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7193106300415!2d44.502255615146794!3d40.19305967713666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z0JDQvNC10YDQuNC60LDQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JDRgNC80LXQvdC40Lg!5e0!3m2!1sru!2s!4v1673037046706!5m2!1en!2s" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}