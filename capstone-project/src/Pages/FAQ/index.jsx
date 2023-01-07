import React from "react";
import { useState } from "react";
import MainPic from "../../assets/images/FaqMain.jpg";
import FAQSection from "../../Components/FAQSection";
import MainPicture from "../../Components/MainPicture";

export default function FAQ() {
    const [faqs, setFaqs] = useState([
        {
            question: "What types of movies are featured on the website?",
            answer: "The website features a diverse selection of movies from a variety of genres and categories. Some of the types of movies that you can find on the website include action films, which are characterized by fast-paced storylines and intense, thrilling scenes; comedy movies, which are designed to make audiences laugh and bring a lighthearted tone to the viewing experience; drama films, which explore serious or emotional themes and often feature complex character development; and horror films, which seek to scare and shock viewers through the use of suspense, supernatural elements, and terrifying imagery. In addition to these main categories, the website also features a range of other movie genres, including romance, science fiction, fantasy, and more, so there is something for every viewer to enjoy.",
            open: false
        },
        {
            question: "How can I find information about a specific movie on the website?",
            answer: "If you are looking for information about a specific movie on the website, there are several options available to you. One of the easiest and most convenient ways to find what you are looking for is to use the search bar at the top of the page. Simply type in the title of the movie you are interested in, and the website will show you any relevant results. Alternatively, you can browse the movie listings by genre to see what is available in a particular category. The website organizes its movies into a variety of different genres, such as action, comedy, drama, horror, and more, so you can easily find what you are looking for based on your personal interests and preferences. Finally, you can use the filters on the website to narrow down your search and find exactly what you are looking for. The filters allow you to specify certain criteria, such as the release date, the rating, and the cast, so you can find movies that meet your specific requirements.",
            open: false
        },
        {
            question: "Is it possible to watch trailers for the movies on the website?",
            answer: "Yes, if you are interested in watching trailers for the movies available on the website, you will be able to do so. The website includes trailers for a wide range of movies in its database, so you can get a preview of what the film is like before you decide whether to watch it.\n\nTo watch a trailer for a specific movie, simply visit the movie's page on the website. Once you are on the page, you should see a trailer player either near the top of the page or in the middle of the page. If the movie has a trailer available, it will be displayed in the trailer player. Simply click on the play button to start the trailer.\n\nIf you are having trouble finding the trailer player or if the movie does not have a trailer available, you can try using the search bar at the top of the page to find more information about the movie. You may also be able to find trailers for the movie on other websites or on the movie's official social media accounts.",
            open: false
        },
        {
            question: "What types of information are available for each movie on the website?",
            answer: "When you visit the page for a specific movie on the website, you will find a wealth of information about that movie. Some of the types of information that are typically available include:\n\nPlot summary: A brief summary of the movie's story, including its main characters and themes.\n\nCast and crew credits: A list of the actors, actresses, and other professionals who worked on the movie, including the director, producers, and writers.\n\nRelease date: The date on which the movie was released or will be released in theaters or on home video.\n\nRuntime: The total length of the movie in minutes.\n\nRating: The movie's rating, such as G, PG, PG-13, R, or NC-17.\n\nUser ratings and reviews: Many movies on the website have ratings and reviews from users who have watched the movie. You can read these reviews to get a sense of what other viewers thought of the movie.\n\nIn addition to these basic details, you may also be able to find other information about the movie, such as trivia, quotes, and behind-the-scenes stories. The amount and type of information available will vary depending on the movie and the website.",
            open: false
        },
        {
            question: "Is the website ad-supported or do I need to pay a subscription fee to use it?",
            answer: "The website is available to use at no cost to the user. This means that you do not need to pay a subscription fee or any other charges in order to access the movie information and trailers on the website.  It is possible that the website is supported by advertising, which means that it displays ads to users while they are browsing the site. These ads may be in the form of banner ads, pop-up ads, or other types of advertising. The presence of ads on the website helps to offset the cost of maintaining and operating the site, and allows the website to offer its content and services to users for free.\n\nWhile the ads may be somewhat distracting, you should not need to pay anything in order to use the website or access its content. If you are asked to provide payment information or to sign up for a subscription in order to use the website, it is possible that you are being directed to a different site or that you are being asked to pay for premium content or services that are not covered by the free version of the site.",
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