import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import MainLogo from "../../assets/images/Logos/Logo1.png";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useEffect } from "react";
import { ROUTE_NAMES } from "../../Routes";

export default function Footer() {
    const [currentYear] = useState(new Date().getFullYear());
    const [showButton, setShowButton] = useState("");

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
                    <NavLink to={ROUTE_NAMES.HOME} end><img src={MainLogo} alt="MainLogog" id="footerLogo" /></NavLink>
                    <ul className="footerNav">
                        <li>
                            <NavLink to={ROUTE_NAMES.HOME} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.MOVIES} end>Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.TV_SHOWS} end>TV Shows</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.FAN_PAGE} end>Fan Page</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.ABOUT_US} end>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.FAQ} end>FAQ</NavLink>
                        </li>
                    </ul>
                <p><NavLink to={ROUTE_NAMES.PRIVACY_POLICY} end>Privacy Policy</NavLink> | © {currentYear} Movie Mavericks. All Rights Reserved</p>
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