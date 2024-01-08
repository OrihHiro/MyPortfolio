import React from "react";
import Navbar from "./Components/navbar";
import Intro from "./Components/intro";
import Skills from "./Components/skills";
import Myportfolio from "./Components/myportfolio";
import Myclient from "./Components/clients";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Myportfolio />
      <Myclient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
