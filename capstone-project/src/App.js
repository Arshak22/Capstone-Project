import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TVShows from "./Pages/TVShows";
import FanPage from "./Pages/Fan Page";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ErrorPage from "./Pages/ErrorPage";
import { DefaultMoviePage } from "./Pages/DefaultMoviePage";

 function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv-shows" element={<TVShows />} />
            <Route path="fan-page" element={<FanPage />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="default-page" element={<DefaultMoviePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
