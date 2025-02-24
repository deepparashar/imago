import React from 'react'
import Logo from '../assets/Logo.jpg'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
     
     <img className='mix-blend-color-burn' src={Logo} width={110} alt="" />
       <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @IMAGO.in | All right reserved.</p>

       <div className='flex gap-3'>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
       </div>
    </div>
  )
}
export default Footer