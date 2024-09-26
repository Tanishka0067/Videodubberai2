import React from 'react'
import img from './image.png'
import Image from 'next/image'
const HomePage = () => {
  return (
    <div className='p-20 text-white flex flex-col items-center'>
     <div className='flex flex-row justify-center gap-12 text-lg font-semibold'>
      <div>HOW IT WORKS</div>
      <div>DONATE</div>
      </div>

      <div>
        <h1 className='text-4xl font-bold text-center p-4'>
        Vocal Remover and Isolation
        </h1>
        <h3 className='text-center text-lg'>Separate voice from music out of a song free with powerful AI algorithms
        </h3>
        <Image src={img} alt="" className='w-9/12 p-6 mx-auto '/>
        </div>
        <div><button className='border-indigo-700 border-2 p-3 rounded-2xl'>Browse my files</button></div> 
    </div>
  )
}

export default HomePage
