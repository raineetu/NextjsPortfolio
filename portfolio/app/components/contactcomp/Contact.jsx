import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className=" text-xl ">Connect with me</h4>
      <h2 className=" text-4xl ">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni
        assumenda labore adipisci? Beatae ipsum, distinctio praesentium, quia
        nam reiciendis recusandae, explicabo nulla sapiente dolore natus omnis
        non. Asperiores, impedit.
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;
