import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

 function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            {/* <Route path="*" element={<Home />} /> */}
          </Route>
      </Routes>
    </div>
  );
}

export default App;
