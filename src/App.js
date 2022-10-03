import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
  return (
    <div className="bg-white relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
