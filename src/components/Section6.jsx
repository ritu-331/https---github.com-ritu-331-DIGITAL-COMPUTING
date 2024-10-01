import React from 'react'
import course from '../assets/every-course-fee.jpg'
import school from '../assets/saraswati-school.jpg'
import atallab from '../assets/atallab.jpeg'


export default function Section6() {

  const image1={
        backgroundImage:`url(${course})`,
        backgroundSize:'cover'
      } 
      const image2={
        backgroundImage:`url(${school})`,
        backgroundSize:'cover'
      }
      const image3={
        backgroundImage:`url(${atallab})`,
        backgroundSize:'cover'
      } 

  return (
  <>
  <section className='bg-slate-950  ] w-full flex justify-center items-center flex-col text-white'>
    <h2 className='text-2xl my-4'>Latest News.</h2>
<p className='my-6'>CHECK OUT SOME OF OUR NEWS</p>

<div id="threeInOne" className='grid grid-cols-1 my-6 w-full md:grid-cols-3 gap-6 mb-24 '>
<div id='threeInOne1' className='  bg-slate-800 p-10 h-72 '  style={image1} >

</div>

<div id='threeInOne2' className=' bg-slate-800 p-10 h-72'  style={image2} >
 
   
</div>

<div id='threeInOne3' className='  bg-slate-800 p-10 h-72'  style={image3} >
 
</div>

</div>

</section>
  </>
  )
}
