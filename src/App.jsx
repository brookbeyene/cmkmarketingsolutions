import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WhyUS from './components/WhyUS'
import Contact from './components/ContactUs'
import Service from './components/Service'
import Carousel from './components/carousel'
import Summer from './assets/summerone.png'
import Winter from './assets/wintertwo.png'
import Spring from './assets/spring.png'


 const slides = [Summer, Winter, Spring, ];

function App() {
  
   
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <img src={slides[0]} className="w-full h-full" />
      {/* <Carousel autoSlide={true} autoSlideInterval={2000}>
        {slides.map((s) => (
          <img
            src={s} />
        ))}
      </Carousel> */}
      <Service />
      <WhyUS />
      <Contact />
    </>
  );
}

export default App
