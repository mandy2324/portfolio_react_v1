import React from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
<main className="text-gray-200 bg-gray-500 body-font">
      <Navbar />
       <About />
      {/* <Projects />
      <Skills />
      <Contact />  */}
    </main>
  );
  
}