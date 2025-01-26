import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return <><hr/>
   <footer className='py-12' >
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col size ={24} items-center justify-center'>
           <div className='flex space-x-4'>
            <FaFacebook size ={24}/>
            <FaInstagramSquare size ={24}/>
            <FaSquareThreads size ={24}/>
            <FaTwitter size ={24}/>
            <FaLinkedin size ={24}/>

            
            </div> 
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm '>
                    &copy; 2025 Reeman's. All rights reserved
                </p>
                <p></p>

            </div>
        </div>
    </div>
   </footer>
    </>
  
}

export default Footer
