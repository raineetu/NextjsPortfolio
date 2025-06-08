"use client";

import About from "./components/aboutcomp/About";
import Header from "./components/headercomp/Header";
import Navbar from "./components/navbarcomp/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}
