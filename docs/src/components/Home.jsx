// // import React from 'react'
// // import Winter from '../assets/winterone.png'
// // import Fishing from '../assets/fishing.png'
// // import Summer from '../assets/summerone.png'
// // const Home = () => {
// //   return (
// //     <div className="bg-black text-white text-center backdrop-grayscale py-16 ">
// //       <img
// //         src="/src/assets/logo.png"
// //         alt="logo"
// //         className="mx-auto mb-8 w-48 h-48 rounded-full hover:-rotate-45 object-cover transform transition-transform duration-300 hover:scale-105"
// //       />

// //       <h1 className="text-4xl font-bold">CMK Solutions</h1>
// //       <p className="text-gray-500">
// //         We bring your fractional ownership properties to life at festivals and
// //         fairs, generating leads and booking tours.
// //       </p>
// //       <h5 className="text-1xl font-bold">We bring the power to you!</h5>

// //       <div className="size-83">
// //         <img
// //           src={Summer}
// //           alt="Summer"
// //           className="mx-auto size-3/5 mb-8 w-68 h-68 rounded-3xl object-cover transform transition-transform duration-300 hover:scale-105"
// //         />

// //         <img
// //           src={Winter}
// //           alt="winter"
// //           className="mx-auto mb-8 w-68 h-68 rounded-3xl object-cover transform transition-transform duration-700 hover:scale-105  hover:translate-x-2 hover:translate-y-6"
// //         />
// //         <img
// //           src={Fishing}
// //           alt="Fishing"
// //           className="mx-auto mb-8 w-98 h-98 rounded-3xl object-cover transform transition-transform duration-300 hover:scale-105"
// //         />
// //       </div>
// //       <div className="mt-8 space-x-4">
// //         <button className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
// //           Services
// //         </button>
// //         <button className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
// //           Why US
// //         </button>
// //         <button className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
// //           Contact US
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home

// import React, { useRef } from "react";
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import Logo from "../assets/cmkLogo.png";

// const Emails = () => {
//   const form = useRef();

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     const data = {
//       user_name: formData.get("user_name"),
//       user_email: formData.get("user_email"),
//       message: formData.get("message"),
//     };

//     try {
//       const response = await fetch("/.netlify/functions/sendEmail", {
//         method: "POST",
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//       } else {
//         alert("Failed to send message.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={Logo}
//             alt="Company Logo"
//             className="w-90 h-80 rounded-full object-cover mb-8 md:mb-0"
//           />

//           <div className="flex-1 w-full">
//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="user_name"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400"
//                   placeholder="Enter Your Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="user_email"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400"
//                   placeholder="Enter Your Email"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400"
//                   rows="5"
//                   placeholder="Enter Your Message"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Emails;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Emails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lxvheyt", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // return (
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="from_name" />
  //     <label>Email</label>
  //     <input type="email" name="from_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );

    return (
      <div className="bg-black text-white py-20" id="contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-90 h-80 rounded-full object-cover mb-8 md:mb-0"
            />

            <div className="flex-1 w-full">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400"
                    rows="5"
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
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

export default Emails