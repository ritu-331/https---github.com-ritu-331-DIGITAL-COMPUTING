import React, { Fragment } from 'react'
import TechImage from '../assets/tech2.webp'
import DcFor  from '../components/DcFor'


export default function Section1() {
  const imageStyle={
    backgroundImage:`url(${TechImage})`,
    backgroundSize:'cover'
  }

  return (
    <>

<section className='bg-slate-900 w-full h-[75vh] flex  items-center' style={imageStyle} >
<div className='h-[50vh] xl:px-40  flex flex-col  justify-center w-[98vw] '>
  <p className='text-3xl md:text-5xl my-8 font-bold text-cyan-700'>We are a data science company</p>
  <h2 className='text-4xl md:text-7xl font-bold text-white'>Connecting Education To <br/> The Industry</h2>
  <div className='mt-28 font-bold  grid grid-cols-1 md:grid-cols-3 md:gap-6 w-full p-2'>
  
  <DcFor para="DC FOR EDUCATION"/>
  <DcFor para="DC FOR INDUSTRY"/>
  <DcFor para="DC FOR TRAINING AND PLACEMENT"/>

  </div>
</div>
    </section>
    </>
  )
}
