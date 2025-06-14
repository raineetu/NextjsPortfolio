"use client";

import About from "./components/aboutcomp/About";
import Contact from "./components/contactcomp/Contact";
import Footer from "./components/footercomp/Footer";
import Header from "./components/headercomp/Header";
import Navbar from "./components/navbarcomp/Navbar";
import Service from "./components/servicecomp/Service";
import Work from "./components/servicecomp/Work";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Header />
        <About />
        <Service />
        <Work />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
