import React, { Fragment } from 'react'

export default function Header() {
  return (
    <Fragment>

<nav className="bg-slate-950 border-b-2 border-gray-200 text-white h-16 md:h-20 xl:h-14  flex items-center justify-center w-full">


<div className="flex font-bold justify-around items-center w-full">
<div> <h1 className="text-3xl "> Digital Computing</h1></div>
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:hidden">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg></div>
</div>

<div className='  hidden md:flex  xl:mr-32'>
<ul className='text-sm font-bold'>
    <li className=''>
     <a  className="ml-[0.8vw] mr-[0.8vw]" href="home.html">HOME</a>
       <a  className="ml-[0.8vw] mr-[0.8vw]" href="services.html">SERVICES</a>
      <a  className="ml-[0.8vw] mr-[0.8vw]" href="courses.html">COURSES</a>
      <a  className="ml-[0.8vw] mr-[0.8vw]" href="works.html">WORKS</a>
      <a  className="ml-[0.8vw] mr-[0.8vw]" href="marksPredictor.html">MARKSPREDICTOR</a>
      <a  className="ml-[0.8vw] mr-[0.8vw]" href="about.html">ABOUT</a>
     <a  className="ml-[0.8vw] mr-[0.8vw]" href="contact.html">CONTACT</a>
      </li>
      </ul>
      </div>
     
</nav>
    </Fragment>
  )
}
