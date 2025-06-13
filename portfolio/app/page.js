"use client";

import About from "./components/aboutcomp/About";
import Contact from "./components/contactcomp/Contact";
import Header from "./components/headercomp/Header";
import Navbar from "./components/navbarcomp/Navbar";
import Service from "./components/servicecomp/Service";
import Work from "./components/servicecomp/Work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Work />
      <Contact />
    </div>
  );
}
