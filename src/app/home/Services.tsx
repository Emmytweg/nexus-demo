'use client'
import React,{useState} from 'react'
import SkeletonCard from '../components/SkeletonCard'
import {motion} from 'framer-motion'
const Services = () => {
  const [cards, setCards] = useState([])
const cardContents =[
  {image: '/img1.png', 
    title:'Healthcare Data solutions', description: 'Data solutions are the backbones of any great data management system, at NexusData Intelligence. we help you streamline your patients data and',  },
  {image: '/img2.png',
     title:'Learning & Development', description: 'Empower your team with targeted training and certification programs, designed to build expertise in healthcare data management and analytics'},
    {image: '/img3.png', title:'Data-Driven Consultation', description: 'Our expert consultations leverage data insights to guide your organization in making informed, strategic decisions that enhance healthcare outcomes.', }
]
    return(
      <>
          <motion.div initial={{opacity: 0, y:50}} 
          whileInView={{opacity:1, y:0}}
          transition={{duration: 1}}
          viewport={{once:true}}
          className='bg-[#E8F2F5]  relative w-full z-10 py-24 overflow-hidden '>
        <div className='flex items-center justify-center pl-24 pr-16 '>  
<hr className='md:mx-auto md:block md:border-gray-300 md:border-2 md:w-24 md:border-t sm:hidden' />
 <span className='text-xl text-black font-extrabold whitespace-nowrap text-center block mx-auto mr-4 ml-4'>SERVICES WE OFFER</span> 
<hr className='md:w-full md:border-2 md:border-gray-300 mx-auto md:block border-t sm:hidden' />

            </div>
            <div className='md:flex-row md:pl-32 flex flex-col justify-between md:pr-32 '>
          {cardContents.map((cdx, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.3 }}
    viewport={{ once: true }}
    className="flex justify-center items-center"
  >
    <SkeletonCard 
      image={cdx.image} 
      title={cdx.title} 
      description={cdx.description} 
    
    />
  </motion.div>
))}

            </div>
            <button className='bg-[#00AEEF] p-4 text-sm text-white rounded-full float-right relative right-32 top-4 sm:w-full'>
  View more
   </button>
     </motion.div>
      </>  
    )

 
    
}
export default Services;