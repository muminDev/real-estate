import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import HouseContextProvider from "./components/HouseContext";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      {" "}
      <HouseContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </Router>
      </HouseContextProvider>
    </div>
  );
};

export default App;
