import {React, useEffect} from "react";
import "./style.css";
import { useGlobalContext } from "../../Context/Context";
import MainPic from "../../assets/images/BackgroundImages/PrivacyPolicyMain.jpeg";
import MainPicture from "../../Components/MainPicture";

export default function PrivacyPolicy() {
    const {setIsLoading} = useGlobalContext();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        document.title = "Movie Mavericks: Privacy Policy";
    }, []);
    
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Your privacy, our priority"/>
            <h2 className="privacyHeadline">Privacy Policy</h2>
            <p className="privacyText">Effective Date: 16/03/2023<br/><br/>

            Thank you for using Movie Mavericks! We are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, and share your personal information when you use our website. By using our website, you agree to the terms of this Privacy Policy.<br/><br/>

            <span className="privacySubHeading">Information We Collect</span><br/><br/>

            We collect personal information from users when they register an account on our website. The personal information we collect includes Full Name/Username, email, password, search history, favorite movie genres, watchlist, favorite movies, and user movie rating.<br/>

            The information we collect is necessary to provide you with a personalized experience on our website, to suggest movies that you might be interested in, and to keep track of your preferences and movie history.<br/><br/>

            <span className="privacySubHeading">Email Activation</span><br/><br/>

            To activate your profile, our website sends an email to your registered email address. This email contains a link that you need to click on to verify your email address and activate your profile. This is a standard practice for most websites that require users to register an account.<br/><br/>

            <span className="privacySubHeading">Tracking Information</span><br/><br/>

            We don't use any digital analytics software for tracking purposes. We don't have ads.<br/><br/>

            <span className="privacySubHeading">Age Restrictions</span><br/><br/>

            Our website is offered to users under the age of 13, however some movies may be for adults or contain violent scenes. We advise parents and guardians to monitor their children's use of our website and to ensure that the movies their children are watching are appropriate for their age.<br/><br/>

            <span className="privacySubHeading">Payment Options</span><br/><br/>

            We don't have any payment options. Everything is free.<br/><br/>

            <span className="privacySubHeading">Data Sources</span><br/><br/>

            The data used on our website was taken from themoviedb using their API. Other images are taken from freepik or generated by AI. We do not claim ownership of any of the data or images used on our website. We are simply using them to provide a better user experience for our users.<br/><br/>

            <span className="privacySubHeading">Information Sharing</span><br/><br/>

            We do not share your personal information with third parties, except as necessary to provide services to you, to comply with applicable laws, or to protect our rights and interests. We may share your information with our trusted partners who help us provide services to you, such as email providers and hosting providers. However, we will not sell your personal information to third parties.<br/><br/>

            <span className="privacySubHeading">Data Security</span><br/><br/>

            We take data security very seriously and have implemented industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. We use encryption to protect your password and other sensitive information. However, no data transmission over the internet is 100% secure, so we cannot guarantee the security of your information.<br/><br/>

            <span className="privacySubHeading">Changes to Privacy Policy</span><br/><br/>

            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes.<br/><br/>

            <span className="privacySubHeading">Contact Us</span><br/><br/>

            If you have any questions or concerns about this Privacy Policy, please contact us at 
            <a className="privacyMails" href="mailto:arshak_kosakyan@edu.aua.am">arshak_kosakyan@edu.aua.am</a>,
            <a className="privacyMails" href="mailto:emin_ter-mkrtchyan@edu.aua.am">emin_ter-mkrtchyan@edu.aua.am</a>,
            <a className="privacyMails" href="arman_harutyunyan@edu.aua.am">arman_harutyunyan@edu.aua.am</a>.<br/><br/>

            Thank you for using Movie Mavericks!
            </p>
        </div>
    );
}