import React from "react";
import ContactForm from "./ContactForm";
import { useTheme } from "@/app/context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-25 text-center mb-2 font-Ovo  ${
        isDark
          ? "bg-black"
          : "bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      }`}
    >
      <h4 className=" text-xl ">Connect with me</h4>
      <h2 className=" text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 inline-block">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'm currently open to freelance work or full-time opportunities, and I’d
        love to hear how I can help bring your ideas to life.
      </p>

      <ContactForm isDark={isDark} />
    </div>
  );
};

export default Contact;
