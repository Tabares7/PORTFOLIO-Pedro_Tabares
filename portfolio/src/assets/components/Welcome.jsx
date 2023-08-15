import React from 'react'
import welcomeImg from '../img/welcome-img.jpg'

const Welcome = () => {
  return (
   <div className="h-full bg-center bg-cover" style={{ backgroundImage: `url(${welcomeImg})` }}>
            <div className="h-full p-10 flex  text-left items-center">
                <h1 className=' text-darkgrenn font-bold'>👋🏼 Hey, This is Pedro Tabares!</h1>
            </div>
        </div>
  )
}

export default Welcome