import React from 'react'
import Winter from '../assets/winterone.png'
import Fishing from '../assets/fishing.png'
import Summer from '../assets/summerone.png'
const Home = () => {
  return (
    <div className="bg-black text-white text-center backdrop-grayscale py-16 ">
      <img
        src="/src/assets/logo.png"
        alt="logo"
        className="mx-auto mb-8 w-48 h-48 rounded-full hover:-rotate-45 object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-4xl font-bold">CMK Solutions</h1>
      <p className="text-gray-500">
        We bring your fractional ownership properties to life at festivals and
        fairs, generating leads and booking tours.
      </p>
      <h5 className="text-1xl font-bold">We bring the power to you!</h5>

      <div className="size-83">
        <img
          src={Summer}
          alt="Summer"
          className="mx-auto size-3/5 mb-8 w-68 h-68 rounded-3xl object-cover transform transition-transform duration-300 hover:scale-105"
        />

        <img
          src={Winter}
          alt="winter"
          className="mx-auto mb-8 w-68 h-68 rounded-3xl object-cover transform transition-transform duration-700 hover:scale-105  hover:translate-x-2 hover:translate-y-6"
        />
        <img
          src={Fishing}
          alt="Fishing"
          className="mx-auto mb-8 w-98 h-98 rounded-3xl object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Services
        </button>
        <button className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Why US
        </button>
        <button className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact US
        </button>
      </div>
    </div>
  );
}

export default Home