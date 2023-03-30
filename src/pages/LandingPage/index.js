import React from 'react'


import About from '../../components/About'
import Benefit from '../../components/Benefit'
import Destination from '../../components/Destination'
import Footer from '../../components/Footer'
import FormTicket from '../../components/FormTicket'
import HeroBanner from '../../components/HeroBanner'
import NavigationBar from '../../components/NavigationBar'
import Question from '../../components/Question'
import Testimonial from '../../components/Testimonial'

const LandingPage = () => {
  return (
    <>
        <NavigationBar/>
        <HeroBanner/>
        <About/>
        <Testimonial/>
        <Benefit/>
        <Destination/>
        <div className='w-[87%] h-[100vh] mx-auto flex justify-between mt-[50vh]'>
         <Question/>
         <FormTicket/>
        </div>
        <Footer/>
    </>
  )
}

export default LandingPage