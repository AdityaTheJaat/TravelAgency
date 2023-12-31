import React from 'react'
import s1 from "../resources/s1.png"
import s2 from "../resources/s2.jpg"
import s3 from "../resources/s3.jpg"
import s4 from "../resources/s4.png"

const Services = () => {
  return (
    <div className='flex-row justify-center items-center'>
      <div className='text-center text-[#5E6282]'>CATEGORY</div>
      <div className='text-center font-bold text-[50px]'>We Offer Best Services</div><br/><br/>
      <div className='flex flex-wrap justify-center items-center p-3 text-[#5E6282] text-center mx-auto'>
        <div className='p-5 md:w-[25%] hover:border-2 hover:rounded-xl hover:bg-slate-100 hover:transition-colors'>
          <img src={s1} className='mx-auto'/>
          <div>Calculated Weather</div>
          <div>Built Wicket longer admire do barton vanity itself do in it.</div>
        </div>
        <div className='p-5 md:w-[25%] hover:border-2 hover:rounded-xl hover:bg-slate-100 hover:transition-colors'>
          <img src={s2} className='w-[110px] mx-auto'/>
          <div>Best Flights</div>
          <div>Engrossed listening. Park gate sell they west hard for the.</div>
        </div>
        <div className='p-5 md:w-[25%] hover:border-2 hover:rounded-xl hover:bg-slate-100 hover:transition-colors'>
          <img src={s3} className='w-[100px] mx-auto'/>
          <div>Local Events</div>
          <div>Barton vanity itself do in it. Preferd to men it engrossed listening. </div>
        </div>
        <div className='p-5 md:w-[25%] hover:border-2 hover:rounded-xl hover:bg-slate-100 hover:transition-colors'>
          <img src={s4} className='mx-auto'/>
          <div>Customization</div>
          <div>We deliver outsourced aviation services for military customers</div>
        </div>
      </div>
    </div>
  )
}

export default Services