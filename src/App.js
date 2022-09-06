import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
