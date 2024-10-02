import React from 'react'
import Services from './Services'



export default function Section3() {
const list1=["NEP Based Training","Coding & IOT Labs","ATAL Tinkering Labs.","AICTE-IDEA Labs.","Marks Predictor"]
const list2=["Digital Marketing.","UI/UX & Graphics Designing","Web Development.","ERP & CRM Software","Custom Softwares.","Mobile Application"]
const list3=["AI & Data Science.","Full Stack Development.","Cross Platform Development.","Mobile App Development.","Interview Preparations.","Multi-Domain Placements."]


  return (
  <>
  <section className='bg-slate-900  ] w-full flex justify-center flex-col text-white'>
    <div className='p-4'>   
       <div className='flex  items-center my-6' ><div className='h-1 w-16 bg-cyan-800  mx-2'></div><span className='text-4xl'>Services</span> </div>
  <p className='font-bold text-cyan-600 my-10'>OUR SERVICES FOR CLIENTS</p>
  <div  className='grid grid-cols-1  md:grid-cols-3  gap-6 mb-24 '>


<Services head="Education"  list={list1.map((e)=><li>{e}</li>)} />

<Services head="ITES & Industry"  list={list2.map((e)=><li>{e}</li>)} />
<Services head="Training Placement"  list={list3.map((e)=><li>{e}</li>)} />
</div>

</div>


  </section>
  </>
  )
}
