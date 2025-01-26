import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import pic from "../../public/cute-icon.png"
import { ReactTyped } from "react-typed";

function Home() {
  return (
   <>
   <div name ="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 md:my-10 my-7'>
    <div  className='flex flex-col md:flex-row md:flex-row-reverse'>
        {/* Text and social media icons */}
        <div className='md:w-1/2 mt-4 md:mt-24 order-2'>
         <span className='text-xl'>welcome in my feed </span>
       <div className='flex space-x-1 text-2xl md:text-4xl'>
         <h1>Hello! i am a </h1>
         <ReactTyped
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
          className='text-red-700 font-bold'
        />
         </div>
         <br />
        <p className='text-sm md:text-md text-justify'>i dont know what to write. right now i am very disturb and demotivated</p>
        <br />
        {/* Social media app icons */}
        <div className='flex flex-col items-center md:flex-row justify-between space-x-10 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold text-center'>Available on</h1>
            <ul className='flex space-x-9'>   
            <li>
              <a href="https://www.facebook.com/login/" target='_blank'><FaFacebookSquare className='text-2xl cursor-pointer hover:scale-110 duration-200'/> </a></li>
            <li><a href="https://www.linkedin.com/login"target='_blank'><FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200'/></a></li>
            <li><a href="https://www.youtube.com/account" target='_blank'><FaYoutube className='text-2xl cursor-pointer hover:scale-110 duration-200'/></a></li>
            </ul>
        </div>
        {/* Adding space between the two sections */}
        <div className='space-y-2 items-center mt-6 items-center justify-between md:space-y-3'>
        <h1 className='font-bold text-center'>Currently working</h1>
            <ul className='flex space-x-9'>   
            <FaJava className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-2pxl'/>
            <FaPython  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2pxl '/>
            <FaFlutter  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2pxl '/>
            </ul>
        </div>
        </div>
        </div>

        {/* Image section */}
        <div className='md:w-1/2 flex justify-center mt-0 order-1'>
         <img src={pic} className='w-[150px] h-[150px] md:w-[450px] md:h-[450px] rounded-full' alt='' />
        </div>
    </div>
   </div>

   <hr />
   </>
  )
}

export default Home;
