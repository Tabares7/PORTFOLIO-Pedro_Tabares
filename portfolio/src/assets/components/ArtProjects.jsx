import React from 'react'
import artGif from '../img/design.gif'
import {BiRightArrowAlt} from 'react-icons/bi'

const ArtProjects = () => {
  return (
    <div
    className="h-full bg-right bg-cover"
    style={{ backgroundImage: `url(${artGif})` }}
  >
  <div className="h-full relative p-7 gap-2  w-full bg-darkgrenn bg-opacity-20  flex flex-col text-left">
        <div className=" h-3/5"></div>
        <h1 className=" text-lightgreen text-7xl md:text-8xl font-black ">
        <p>Art</p>
        <p>Projects</p>
        </h1>
      {/* <p className=" text-white text-sm lg:text-xl">
        You know, where creativity meets functionality. 
      </p> */}
      <div className="absolute top-5 right-5  text-white md:text-2xl text-lg"><BiRightArrowAlt/></div>

    </div>
  </div>
  )
}

export default ArtProjects