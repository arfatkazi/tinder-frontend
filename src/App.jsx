import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <div id="main">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};
export default App;
