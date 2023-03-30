import React from 'react'
import hero from "../../src/assets/images/bg_hero.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HeroBanner = () => {
  return (
    <div id='hero' className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-full">
      <h1 data-aos="fade-right" data-aos-duration="1000" className="mb-5 text-5xl font-bold">Mau Staycation Murah Tanpa Ribet?</h1>
      <p data-aos="fade-left" data-aos-duration="1000" className="text-2xl">Kami bantu kamu mendapatkan tempat staycation paling pas</p>
      <p data-aos="fade-left" data-aos-duration="1000" className="mb-10 text-2xl">sama impian kamu</p>
      <div data-aos="zoom-in-up" ata-aos-duration="3000" data-aos-delay="1000" className="w-[50vw] h-[12vh] rounded-lg  text-black text-2xl flex mx-auto bg-white items-center" >
            <input type="text" placeholder="Ketik “Yogyakarta”" className='input w-full text-black text-2xl focus:outline-none' />
            <button className="bg-primary text-black font-bold text-secondary w-[15vw] h-[8vh] text-xxl rounded hover:bg-secondary hover:text-primary mr-5">Cari Tempat</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HeroBanner