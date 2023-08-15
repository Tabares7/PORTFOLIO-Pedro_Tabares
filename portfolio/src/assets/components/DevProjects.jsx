import React from 'react'
import devGif from '../img/dev.gif'
import {BiRightArrowAlt} from 'react-icons/bi'

export const DevProjects = () => {
  return (
    <div
      className="h-full bg-right bg-cover"
      style={{ backgroundImage: `url(${devGif})` }}
    >
      <div className="h-full relative p-7 gap-2  w-full bg-lightgreen bg-opacity-40  flex flex-col text-left   ">
        <div className=" h-3/5"></div>
        <h1 className=" text-white font-bold text-xl md:text-3xl">
        💻 Dev Projects and Tests.
        </h1>
        <p className=" text-white text-sm lg:text-xl">
          Where practice and learning como to life.
        </p>
        <div className="absolute top-5 right-5  text-white md:text-2xl text-lg"><BiRightArrowAlt/></div>

      </div>
    </div>
  )
}
