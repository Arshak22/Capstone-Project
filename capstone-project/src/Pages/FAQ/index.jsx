import React from "react";
import { useState } from "react";
import MainPic from "../../assets/images/FaqMain.jpg";
import FAQSection from "../../Components/FAQSection";
import MainPicture from "../../Components/MainPicture";

export default function FAQ() {
    const [faqs, setFaqs] = useState([
        {
            question: "What types of movies are featured on the website?",
            answer: "The website features a wide range of movies in various genres, including action, comedy, drama, horror, and more.",
            open: false
        },
        {
            question: "How can I find information about a specific movie on the website?",
            answer: "You can use the search bar at the top of the page to search for a specific movie by title. You can also browse the movie listings by genre or use the filters to narrow down your options.",
            open: false
        },
        {
            question: "Is it possible to watch trailers for the movies on the website?",
            answer: "Yes, the website includes trailers for many of the movies in the database. You can find the trailer by visiting the movie's page and looking for the trailer player.",
            open: false
        },
        {
            question: "What types of information are available for each movie on the website?",
            answer: "The website provides a variety of information for each movie, including the plot summary, cast and crew credits, release date, and more. You can also find user ratings and reviews for many movies.",
            open: false
        },
        {
            question: "Is the website ad-supported or do I need to pay a subscription fee to use it?",
            answer: "The website is free to use and does not require a subscription fee. It may be supported by ads, but you do not need to pay anything to access the movie information and trailers on the website.",
            open: false
        },
    ]);

    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Got questions? We've got answers"/>
            <FAQSection faqs={faqs}/>
        </div>
    );
}