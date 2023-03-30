
import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"


const NavigationBar = () => {
  return (
       <>
       <BrowserRouter>
          <div className="navbar bg-base-100 px-[100px] fixed top-0 z-10">
            <div className="flex-1">
              <Link to='#hero' smooth className="btn btn-ghost normal-case text-xl font-bold">STAYCATIONMURAH</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 text-xl">
                <li><Link to='#about' smooth>Tentang Kami</Link></li>
                <li><Link to='#benefit' smooth>Benefit</Link></li>
                <li><Link to='#testimonial' smooth >Testimonial</Link></li>
              </ul>
              <button className="bg-primary text-black font-bold text-secondary w-[8vw] h-[8vh] text-xl rounded hover:bg-secondary hover:text-primary">Daftar</button>
            </div>
          </div>      
       </BrowserRouter>
       </>
  )
}

export default NavigationBar