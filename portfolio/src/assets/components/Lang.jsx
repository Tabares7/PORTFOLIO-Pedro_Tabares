import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

const Lang = () => {
  return (
    <div className="relative flex flex-col bg-darkgrenn text-lightgreen min-h-full font-extrabold items-center text-7xl justify-center mx-auto">
    <div className="absolute top-5 right-5 text-gray-500 text-sm"><BiLinkExternal/></div>
  <p>EN</p>
  <p>ES</p>
</div>
  )
}

export default Lang