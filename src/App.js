import React, { useState } from "react";
import {Footer} from "./components/Footer";
import Router from "./components/Router";
import Navbar from "./components/Navbar";

const App = () => {
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <div className={DarkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <Router />
        <Footer />
      </div>
    </div>
  );
};

export default App;
