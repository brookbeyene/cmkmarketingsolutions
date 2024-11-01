import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import logo from "../assets/logo.png";
import Logo from "../assets/cmkLogo.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const from = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        from.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Logo}
            alt=""
            className="w-90 h-80 rounded-full object-cover mb-8 md:mb-0"
          />
         

          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-1">
              <h3
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
              >
                Let's Talk
              </h3>
              <p>We are here for you.</p>
              <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
                <a
                  href="mailto:youremail@example.com"
                  className="hover:underline"
                >
                 tempemail@cmkmarketing.solutions
                </a>
              </div>
              <div className="mb-4">
                <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
                <span>720-473-0132</span>
              </div>
              <div className="mb-4">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
                <span>Denver, CO</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" ref={from} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Name"
                  name="from_name"
                />
              </div>
              <div>
                <label htmlFor="emial" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Email"
                  name="from_email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter You Message"
                  name="message"
                />
              </div>
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
