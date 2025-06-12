'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image';
import AnimatedArrow from './AnimatedArrow'; // Assuming you have an AnimatedArrow component
import AnimatedSVG from './AnimatedSVG'

interface SkeletonCardProps {
  image: string;
  title: string;
  description: string;
  
}
export default function SkeletonCard({image, title, description}: SkeletonCardProps){
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    const timeout = setTimeout(()=> setLoading(true), 3000)
    return ()=> clearTimeout(timeout)
  }, [])
  return(
    <div className="max-w-sm mx-auto w-72 bg-white shadow-mg rounded-lg overflow-hidden mt-10">
      {
        !loading && (
          <div className="animate-pulse">
          <div className="h-48 bg-gray-300 rounded mb-4"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
          </div>
        )
      }
      <div className={loading ? ' ' : 'block '}>
        <Image src={image} alt={title} width={400} height={400} className={`md:w-68 rounded-lg h-48 mx-auto object-contain duration-500 transition-opacity ${loading ? 'opacity-100': 'opacity-0'}`}  onLoadingComplete={()=> setLoading(true)}/>
          <div className="p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className= 'text-sm '>{description}</p>
          </div>
      </div>
      <div className="flex gap-36 items-center">
       {/* <Image src={svg1} height={50}  width={50} alt={title} className=' transition-transform duration-300 hover:scale-110 hover:rotate-x-4 cursor-pointer'  /> */}
       <AnimatedSVG />
       <AnimatedArrow />
         {/* <Image src={svg2} height={50}  width={50} alt={title} className='-mt-4 cursor-pointer group' /> */}
     
      

     
        
      </div>
    </div>

  )
}