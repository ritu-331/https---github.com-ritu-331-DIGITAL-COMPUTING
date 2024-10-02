import React from 'react'
import FutureIdeas from './FutureIdeas'

export default function Section2() {
  return (
    <>
    <section className='bg-slate-950 w-full flex justify-center  text-white'>
        <div  className='grid grid-cols-1 px-6 md:grid-cols-3 gap-6 mb-24 xl:w-[70vw]'>
<FutureIdeas heading="Future Concept" paragraph="Anybody can became a data scienceist, developer or interpreneur. we are focused on 'Aatmnirbhar Digital Bharat'" />
<FutureIdeas heading="Creative Solutions" paragraph="At your company, we believe that creativity is the key to unlocking successful business solutions. Our team of experienced professionals is dedicated to developing such a solution that are tailored to your business." />
<FutureIdeas heading="The Big Ideas" paragraph="Map,Match and Fit. We train people by their interests, match their actual interests with live projecs and fit them into a satisfying profile." />
</div>
    </section>
    </>
  )
}
