import React from "react";
import "./style.css";

import Map from "../../assets/images/YerevanAUAMap.png";

export default function MapAndAboutUs() {
    return (
        <div className="MapAndAboutUs">
            <div className="row3">
                <div className="col3">
                    <a href="https://aua.am/" target="_blank" rel="noreferrer"><img src={Map} alt="AUAMap" /></a>
                </div>
                <div className="col3">
                    <h1>About the Movie Mavericks</h1>
                    <p>As a team of three students, we have always had a love for movies. It was this shared passion that brought us together and inspired us to create Movie Mavericks. Our goal is to provide a destination for film lovers to discover new and exciting titles, and to share our own thoughts and perspectives on the film industry. <br/> <br/>

                    As avid moviegoers, we are constantly on the lookout for the latest and greatest in cinema. We strive to bring fresh and diverse content to our website, and we hope to create a community where film enthusiasts can come together to discuss and share their love of movies. <br/> <br/>

                    We hope that you will join us on this journey and become a part of the Movie Mavericks community. Thank you for stopping by and we can't wait to share our love of movies with you! <br/> <br/>

                    Sincerely, <br/>
                    <span className="big">The Movie Mavericks</span></p>
                </div>
            </div>
        </div>
    );
}