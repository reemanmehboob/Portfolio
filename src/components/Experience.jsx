import React from 'react'
import python from "../../public/pythonlogo.jpeg"
import react from "../../public/reacticon.png"
import flutter from "../../public/fluttericon.png"
import html from "../../public/htmllogo.png"
import firebase from "../../public/firebase.png"
import supabase from "../../public/supabase.jpeg"
import css from "../../public/csslogo.png"
import anaconda from "../../public/anacondalogo.png"
import javascript from "../../public/javascript.png"
import dart from "../../public/dart-logo.png"


function Experiance() {
  const cardItem = [
    {
      id:1,
      logo: html,
      name: "Html"
    },
    {
      id:2,
      logo: css,
      name: "CSS"
    },
    {
      id:3,
      logo: javascript,
      name: "Javascript"
    },
    {
        id:4,
        logo: anaconda,
        name: "Anaconda"
      },
      {
        id:5,
        logo: dart,
        name: "Dart"
      },

      {
        id:6,
        logo: firebase,
        name: "Firebase"
      },
      {
        id:7,
        logo: supabase,
        name: "Supabase  "
      },
  ]
  return (
    <div name ="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 md:my-10 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>
            Experience
        </h1>
        <p className='font-semibold'>
           I've more than 2 months Experiance in below technologies.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
          {
            cardItem.map(({id,logo,name})=>(
              <div className='flex flex-col items-center justify-center shadow-md border-[2px] rounded-full p-1 md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[150px]  rounded-full ' alt="" />
                <div>
                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
              
                </div>
            
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experiance
