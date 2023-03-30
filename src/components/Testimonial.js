import React, {useState, useEffect} from 'react'
import murah from '../../src/assets/images/murah.svg'
import murah_banget from '../../src/assets/images/murah_banget.svg'
import gratis from '../../src/assets/images/gratis.svg'
import ga_php from '../../src/assets/images/ga_php.svg'
import asyik from '../../src/assets/images/asyik.svg'
import hidden_gem from '../../src/assets/images/hidden_gem.svg'
import bikin_kaget from '../../src/assets/images/bikin_kaget.svg'
import terkini from '../../src/assets/images/terkini.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Testimonial = () => {

  const [testi, setTesti] = useState([]);
  useEffect(() => {
    setTesti([
      {
        id: 1,
        title: "Murah",
        image: murah,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 2,
        title: "Murah Banget",
        image: murah_banget,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 3,
        title: "Gratis?",
        image: gratis,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 4,
        title: "Asyik",
        image: asyik,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 5,
        title: "Terkini",
        image: terkini,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 6,
        title: "Hidden Gem",
        image: hidden_gem,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 7,
        title: "Bikin Kaget",
        image: bikin_kaget,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 8,
        title: "Ga PHP",
        image: ga_php,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },

    ]);
  }, []);



  return (
    <>
      <div id='testimonial' className='w-full bg-bg_second h-[170vh] px-20 py-20'>
        <div className='flex w-full mb-10 ms-2'>
          <div className='w-full' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <p className='text-tertiary text-4xl font-black'>Kata mereka</p>
            <p className='text-tertiary text-4xl font-black'>ini keunggulan kami</p>
          </div>
          <div className='pr-[10vw]' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" data-aos-delay="1000"
     >
            <p className='text-[#858585] text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>

        {/* dynamic */}
        <div className='w-full flex flex-wrap ms-2' >
          {testi.map((item)=> (
            <div key={item.id} className="card w-[20vw] bg-base-100 shadow-xl items-start mt-8 mr-5" >
                <figure className="px-7 pt-10">
                  <img src={item.image} alt="Murah" className="rounded-xl animate-bounce" />
                </figure>
                <div className="w-full px-7 py-10">
                  <h2 className="card-title font-extrabold mb-3 text-2xl">{item.title}</h2>
                  <p className='text-[#858585] text-lg'>{item.description}</p>
                </div>
            </div>
          ))}
        </div>
        

      </div>
    </>
  )
}

export default Testimonial