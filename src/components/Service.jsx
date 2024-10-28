import React from 'react'
import logo from '../assets/logo.png'
import summerone from '../assets/summerone.png'
import summertwo from '../assets/summertwo.png'
import fishing from '../assets/fishing.png'
import ballon from '../assets/ballon.png'

const Service = () => {
  
   return (
     <div className="bg-black text-white py-20" id="services">
       <div className="container mx-auto px-8 md:px-16 lg:px-24">
         <div className="flex flex-col md:flex-row items-center md:space-x-12">
           <div className="flex-1">
             <h2 className="text-4xl font-bold text-center mb-12 ">Services</h2>
             <p className="text-lg mb-8 align-middle">
               We actively engage with potential buyers by participating in over
               60 events within your local area. These events offer a great
               opportunity to showcase the benefits of vacation ownership,
               connect directly with interested prospects, and build trust
               through personalized interactions. From travel expos and
               community gatherings to industry-specific shows, we ensure your
               brand reaches a broad and relevant audience, maximizing
               opportunities for growth.
             </p>
             {/* <p className="text-lg mb-8 align-middle">
                *then if we could get pictures of a
               family festival, like a craft fair or county fair. a picture of a
               beer or wine festival-both outside then the last pic of an indoor
               show like the golf show, sportsman expo or even the stock show
             </p> */}
             <div className="space-y-4"></div>
           </div>
           <img
             src={ballon}
             alt=""
             className="w-90 h-80 rounded-3xl object-cover mb-8 md:mb-0"
           />
         </div>
       </div>
     </div>
   );
  
}

export default Service