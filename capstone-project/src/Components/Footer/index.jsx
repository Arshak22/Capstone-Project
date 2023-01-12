import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import MainLogo from "../../assets/images/Logo1.png";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useEffect } from "react";

export default function Footer() {
    const [currentYear] = useState(new Date().getFullYear());
    const[showButton, setShowButton] = useState("");

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300 ? setShowButton("show"): setShowButton("");
        };

        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        }
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div className="footer">
            <div className="top">
                <div> 
                    <NavLink to="/" end><img src={MainLogo} alt="MainLogog" id="footerLogo" /></NavLink>
                    <ul className="footerNav">
                        <li>
                            <NavLink to="/" end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" end>Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv-shows" end>TV Shows</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fan-page" end>Fan Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" end>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" end>FAQ</NavLink>
                        </li>
                    </ul>
                <p><NavLink to="/privacy-policy" end>Privacy Policy</NavLink> | © {currentYear} Our Team Name. All Rights Reserved</p>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                        <h6 className="mail">
                            <a href="mailto:arshak_kosakyan@edu.aua.am">
                                <FaEnvelopeOpenText className="envelope"/>arshak_kosakyan@edu.aua.am
                            </a>
                        </h6>
                        <h6 className="mail">
                            <a href="mailto:emin_ter-mkrtchyan@edu.aua.am">
                                <FaEnvelopeOpenText className="envelope"/>emin_ter-mkrtchyan@edu.aua.am
                            </a>
                        </h6>
                        <h6 className="mail">
                            <a href="mailto:arman_harutyunyan@edu.aua.am">
                                <FaEnvelopeOpenText className="envelope"/>arman_harutyunyan@edu.aua.am
                            </a>
                        </h6>
                </div>
            </div>
            <button className={`moveToTopBtn ${showButton ? "show": ""}`} onClick={handleScrollToTop}><FaAngleDoubleUp/></button>
        </div>
    );
}