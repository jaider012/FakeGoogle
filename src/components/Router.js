import React from "react";
import { Route, Routes } from "react-router-dom";
import { Results } from "./Results";

const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/search" element={<Results />} />
        <Route path="/new" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="*" element={<Results />} />
      </Routes>
    </div>
  );
};

export default Router;
