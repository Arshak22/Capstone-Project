import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

 function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
    </Routes>
  );
}

export default App;
