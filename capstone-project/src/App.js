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
import { ROUTE_NAMES } from "./Routes";

 function App() {
  return (
    <div>
      <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTE_NAMES.HOME} element={<Home />} />
            <Route path={ROUTE_NAMES.MOVIES} element={<Movies />} />
            <Route path={ROUTE_NAMES.TV_SHOWS} element={<TVShows />} />
            <Route path={ROUTE_NAMES.FAN_PAGE} element={<FanPage />} />
            <Route path={ROUTE_NAMES.ABOUT_US} element={<About />} />
            <Route path={ROUTE_NAMES.FAQ} element={<FAQ />} />
            <Route path={ROUTE_NAMES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
            <Route path={ROUTE_NAMES.DEFAULT_PAGE} element={<DefaultMoviePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
