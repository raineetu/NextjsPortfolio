import React, { useState } from "react";
import { assets } from "@/constants/assets";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ isDark }) => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5bb2c38-c23f-4d74-8a79-9ed41d49a9f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error("Form Submission failed");
      setResult(data.message);
    }
    setSending(false);
  };
  return (
    <div>
      <form className="max-w-2xl mx-auto  px-5" onSubmit={onSubmit}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10 ">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className={`flex-1 p-3 border-[0.5] border-gray-400 rounded-lg outline-none ${
              isDark ? "bg-gray-900 text-white" : "bg-white"
            }`}
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className={`flex-1 p-3 border-[0.5] border-gray-400 rounded-lg outline-none  ${
              isDark ? "bg-gray-900 text-white" : "bg-white"
            }`}
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className={`w-full p-3 border-[0.5] border-gray-400 rounded-lg outline-none  ${
            isDark ? "bg-gray-900 text-white" : "bg-white"
          }`}
        ></textarea>
        <button
          type="submit"
          className={`py-3 px-6 mt-4 w-max flex items-center justify-center gap-2  rounded-full mx-auto bg-black/80 text-white  duration-500 cursor-pointer border ${
            isDark ? "border-gray-400" : "hover:bg-black"
          }`}
        >
          <ToastContainer position="top-center" autoClose={2000} />

          {sending ? (
            <span>Sending...</span>
          ) : (
            <>
              Submit now
              <Image
                src={assets.right_arrow_white}
                alt="right arrow"
                className="w-4"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
