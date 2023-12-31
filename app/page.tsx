"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState,useEffect } from 'react';
import AllSales from './comps/Allsales'
import BestSelling from './comps/BestSelling';
import AllBestSales from './comps/AllBestSales';
import AllHomeComponent from './comps/AllHomeComponent';
import AllExplore from './comps/Allexplore';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
 
  const images: string[] = [
    "https://i.ibb.co/q5xmSrs/abb69c62-8b6f-409d-8c16-17ee11e65044.png",
    "https://images2.imgbox.com/2e/05/FIVuJlGH_o.jpg",
    "https://i.ibb.co/wLxgQRL/resize-1703240989234827213spiderman2featured-1.jpg"
  ];  
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(changeImage, 5000); 
    return () => clearInterval(interval); 
  }, []);
 

  return (
    <>
    <div >
      <hr className='text-gray-300'/>
      <div className=''>
      
           <div className=' flex justify-start m-11 gap-32 mt-[100px]'>
           <div id="unique" className='text-lg '>
          <h1 className='mb-2 cursor-pointer'>women's fashion </h1>
          <h1 className='mb-2 cursor-pointer'>men's fashion</h1>
          <h1 className='mb-2 cursor-pointer'>Electronics</h1>
          <h1 className='mb-2 cursor-pointer'>Home & LifeStyle</h1>
          <h1 className='mb-2 cursor-pointer'>Medecine</h1>
          <h1 className='mb-2 cursor-pointer'>Sports & Outdoor</h1>
          <h1 className='mb-2 cursor-pointer'>Baby's & Toys</h1>
          <h1 className='mb-2 cursor-pointer'>Groceries & Pets</h1>
          <h1 className='mb-2 cursor-pointer'>Health & Beauty</h1>
           </div>
           <img
          className='w-[1000px] ml-[40px] -mt-[10px]'
          src={images[currentImageIndex]}
          alt=''
          onClick={changeImage} 
        />  
           </div>
      </div>
           <hr id="hr-unique" className=' rotate-90 w-96 -mt-[300px] text-gray-300 m-[25px]'/>
    </div>

    <div className='mt-[350px] '>
      <AllHomeComponent/>
    </div>
 

    </>

  )
}