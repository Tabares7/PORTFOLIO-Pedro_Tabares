import React from 'react'
import devGif from '../img/dev.gif'
import {BiRightArrowAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';


export const DevProjects = () => {
  const navigate = useNavigate();
  
  const handleOnClick = ()=>{
    navigate('/projects')
  }
  return (
    <div
      className="h-full bg-center md:bg-cover bg-cover cursor-pointer relative"
      style={{ backgroundImage: `url(${devGif})` }}
      onClick={handleOnClick}
    >
      <div className="h-full relative p-7 gap-2  w-full bg-darkgrenn bg-opacity-50  flex flex-col text-left">
        <div className=" h-3/5"></div>
        <h1 className=" text-lightgreen text-7xl md:text-8xl font-black ">
        <p>Dev</p>
        <p>Projects</p>
        </h1>
        {/* <p className=" text-white text-sm lg:text-xl">
          Where practice and learning como to life.
        </p> */}
        <div className="absolute top-5 right-5  text-white md:text-2xl text-lg"><BiRightArrowAlt/></div>

      </div>
    </div>
  )
}
