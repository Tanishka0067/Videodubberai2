import React from 'react'
import img from './image.png'
import Image from 'next/image'
const HomePage = () => {
  return (
    <div>
     <div>
      <div>HOW IT WORKS</div>
      <div>DONATE</div>
      </div>

      <div>
        <h1>
        Vocal Remover and Isolation
        </h1>
        <h3>Separate voice from music out of a song free with powerful AI algorithms
        </h3>
        <Image src={img} alt="" />
        </div>
        <div><button>Browse my files</button></div> 
    </div>
  )
}

export default HomePage
