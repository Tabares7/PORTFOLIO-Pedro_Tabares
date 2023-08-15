import React from 'react'
import welcomeImg from '../img/welcome-img.jpg'

const Welcome = () => {
  return (
   <div className="h-full bg-right bg-cover" style={{ backgroundImage: `url(${welcomeImg})` }}>
            <div className="h-full p-10  bg-lightgreen bg-opacity-80 sm:bg-opacity-0 flex flex-col text-left w-full sm:w-2/3 ">
                <div className=" h-3/5"></div>
                <h1 className=' text-darkgrenn font-bold'>👋🏼 Hey, This is Pedro Tabares!</h1>
                <p className=' text-darkgrenn'>Here's a <span className='font-bold'>frontend developer</span> with four years of diving deep into code. But it's not all about coding, I also dabble in <span className=' font-bold'>graphic design, branding, and crafting cool logos</span>. Always ready to create something functional and stylish.</p>
            </div>
        </div>
  )
}

export default Welcome