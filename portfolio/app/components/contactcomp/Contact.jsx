import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      //   className="w-full px-[12%] py-10 scroll-mt-20 text-center mb-2 font-Ovo bg-[url("/footer-bg-color.png") bg-no-repeat bg-center bg-[length:90%_auto]]"
      //   style={{ backgroundImage: `url(${footer - bg - color.png})` }}
    >
      <h4 className=" text-xl ">COnnect with me</h4>
      <h2 className=" text-4xl ">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni
        assumenda labore adipisci? Beatae ipsum, distinctio praesentium, quia
        nam reiciendis recusandae, explicabo nulla sapiente dolore natus omnis
        non. Asperiores, impedit.
      </p>

      <form>
        <div>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
        </div>
        <textarea rows="6" placeholder="Enter your message" required></textarea>
        <button type="submit">Submit now</button>
      </form>
    </div>
  );
};

export default Contact;
