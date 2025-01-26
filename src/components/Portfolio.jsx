import React from 'react'
import python from "../../public/pythonlogo.jpeg"
import react from "../../public/reacticon.png"
import flutter from "../../public/fluttericon.png"



function Portfolio() {
  const cardItem = [
    {
      id:1,
      logo: react,
      name: "react"
    },
    {
      id:2,
      logo: flutter,
      name: "Flutter"
    },
    {
      id:1,
      logo: python,
      name: "Python"
    },
  ]
  return (
    <div name ="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 md:my-10 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>
            Portfolio
        </h1>
        <span className='underline font-semibold'>
            Featured Projects
        </span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
          {
            cardItem.map(({id,logo,name})=>(
              <div className='md:w-[300px] md:h-[300px] borde-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 border-2px  ' alt="" />
                <div>
                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                <p className='px-2 text-gray-700'>anything about this project</p>
                </div>
                <div className='justify-around px-6 py-4 space-x-3'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>source code</button></div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
