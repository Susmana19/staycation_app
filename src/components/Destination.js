import React, { useEffect, useState } from 'react'

import yogya from '../assets/images/yogya.jpg'
import malang from '../assets/images/malang.jpg'
import bali from '../assets/images/bali.jpg'
import bajo from '../assets/images/bajo.jpg'
import bandung from '../assets/images/bandung.jpg'
import ampat from '../assets/images/ampat.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Destination = () => {

    const [town, setTown] = useState([]);
    useEffect(()=> {
        setTown([
            {
                id: 1,
                name: "Yogyakarta",
                total: 300,
                image: yogya
            },
            {
                id: 2,
                name: "Malang",
                total: 200,
                image: malang
            },
            {
                id: 3,
                name: "Bali",
                total: 200,
                image: bali
            },
            {
                id: 4,
                name: "Labuan Bajo",
                total: 300,
                image: bajo
            },
            {
                id: 5,
                name: "Bandung",
                total: 200,
                image: bandung
            },
            {
                id: 6,
                name: "Raja Ampat",
                total: 200,
                image: ampat
            },
        ])
    })

  return (
    <>
        <div className='w-full bg-bg_first h-[170vh] px-20 py-20 pt-[50vh]'>
            <div className='flex mb-10 ms-[2vw]'>
                <div className='w-full'>
                    <p className='text-tertiary text-3xl font-black'>Kota paling populer </p>
                    <p className='text-tertiary text-3xl font-black'>Kota paling dicari</p>
                </div>
                <div className='pr-[10vw]' >
                    <p className='text-[#858585] text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>

        {/* dynamic */}
        <div className='w-[95%] mx-auto flex flex-wrap justify-between'>
            {town.map((item)=>(
                <div key={item.id}  className="card rounded-md w-[25vw] h-[62vh] bg-base-100 shadow-xl mb-10 hover:scale-110 transition duration-1000 cursor-pointer bg-cover" style={{backgroundImage: `url(${item.image})`}}>
                    <div className="card-body rounded-md text-center mt-[40vh] text-white text-xl bg-gradient-to-t from-black">
                        <h2 className="card-title mx-auto font-bold text-2xl">{item.name}</h2>
                        <p>{item.total} orang</p>
                    </div>
                </div> 
            ))}
        </div>

         </div>
    
    </>
  )
}

export default Destination