import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationBar from "../Bar/NavigationBar/index.js";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Impressum from "../Organisation/Imprint/Imprint.js";
import Footer from "../Footer/index.js";
import ScrollToTop from "../ScrollToTop/index.js";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Navigate replace to="/LandingPage" />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
