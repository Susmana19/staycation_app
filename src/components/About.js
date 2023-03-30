import React from 'react'
import gallery from "../../src/assets/images/gallery.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <>
        <div id='about'  className="card lg:card-side bg-base-100 shadow-xl py-20 px-[5vw] rounded-none bg-bg_first">
            <figure><img data-aos="fade-up"
     data-aos-duration="2000" src={gallery} alt="Album" className='w-[50vw] h-[50vh]'/></figure>
            <div data-aos="fade-up"
     data-aos-duration="2000" data-aos-delay="1000"
     className="w-[50vw] px-20">
                <h2 className="text-4xl font-bold text-tertiary mb-10">Kami sudah membantu 1.000++ orang staycation. Kamu mau nyoba?</h2>
                <p className='w-[40vw] text-xl text-[#858585]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
        </div>       
    </>
  )
}

export default About