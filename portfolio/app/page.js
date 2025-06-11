"use client";

import About from "./components/aboutcomp/About";
import Header from "./components/headercomp/Header";
import Navbar from "./components/navbarcomp/Navbar";
import Service from "./components/servicecomp/Service";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
    </div>
  );
}
