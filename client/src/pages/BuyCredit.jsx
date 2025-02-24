import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import Mini_Logo from '../assets/mini logo.jpg'
import { motion } from 'motion/react'
const BuyCredit = () => {

  const {user} = useContext((AppContext))


  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>
      
      <div className='flex items-center gap-6 justify-center'>
        {plans.map((item,index) => (
          <div key={index} className=' flex flex-col items-center drop-shadow-xl hover:scale-105 transition-all duration-300 bg-gray-100 px-2 py-4 sm:px-4 rounded-lg'>
            <img src={Mini_Logo} width={40} className='mb-4' alt="" />
            <p className='text-xl font-semibold mt-3 mb-1'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-4'> <span className='text-3xl font-medium'>${item.price}</span>/ {item.credits} credits </p>
            <button className='w-full bg-black text-white mt-8 text-sm rounded-md py-2.5 min-w-52'> {user ? "Purchase" : "Get Started"} </button>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default BuyCredit
