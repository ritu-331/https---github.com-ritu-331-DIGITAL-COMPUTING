import React from 'react'
import Down from './Down'

export default function Footer() {
  return (
    <>
    <footer className='bg-slate-950 flex  justify-center items-center w-full  text-white'>
    <div className='p-2  grid grid-cols-1 md:grid-cols-4 '>
    <div>
    <h4 className='text-4xl font-bold my-4'>Digital <br/>Compuing</h4>
    <div className='h-1 w-20 bg-cyan-500 my-4'></div>
<p className='my-4'>We are a data science company establishing by IT masters, and researchers with great analytical ability, honesty & quality work.</p>
</div>

<div>
    <h4 className='text-2xl font-bold my-4'>Services</h4>
<Down service="Education"/>
<Down service="ITES & Development"/>
<Down service="Training & Placement"/>
<Down service="Consultancy"/>
</div>

<div>
    <h4 className='text-2xl font-bold my-4'>Quick Links</h4>

    <Down service="About Us"/>
    <Down service="Contact Us"/>
    <Down service="Projects"/>
    <Down service="Courses"/>
    <Down service="Marks Predictor"/>
    <Down service="News & Events"/>
    
</div>

<div>
    <h4 className='text-2xl font-bold my-4'>Contact</h4>
    <div className='flex my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
<span>Near HDFC Bank,<br/>In Front Of Dugdheshwar<br/>Mahadev Mandir<br/>Padawa, Khandwa MP(450001)</span></div>
<div className='flex my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
<span>9009239011,07333560963</span></div>
<div className='flex my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<span>info@digialcomputing.co.in</span></div>

</div>
</div>
</footer>
    </>
  )
}
