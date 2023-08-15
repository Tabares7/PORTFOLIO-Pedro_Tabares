import React from 'react'
import welcomeImg from '../img/welcome-img.jpg'

const Welcome = () => {
  return (
   <div className="h-full bg-center bg-cover" style={{ backgroundImage: `url(${welcomeImg})` }}>
            <div className="h-full p-10 flex  text-left items-center">
                <p className="text-white text-3xl">Contenido del componente</p>
            </div>
        </div>
  )
}

export default Welcome