"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Navbar from './comps/Navbar';


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
    <div className=''>
      <hr className='text-gray-300'/>
      <div className='-mt-[50px]'>
      
           <div className=' flex justify-start m-11 gap-32 mt-[100px]'>
           <div id="unique" >
          <h1>women's fashion </h1>
          <h1>men's fashion</h1>
          <h1>Electronics</h1>
          <h1>Home & LifeStyle</h1>
          <h1>Medecine</h1>
          <h1>Sports & Outdoor</h1>
          <h1>Baby's & Toys</h1>
          <h1>Groceries & Pets</h1>
          <h1>Health & Beauty</h1>
           </div>
           <img
          className='w-[1000px] ml-[40px] mt-[30px]'
          src={images[currentImageIndex]}
          alt=''
          onClick={changeImage} 
        />  
           </div>
      </div>
           <hr id="hr-unique" className=' rotate-90 w-96 -mt-[300px] text-gray-300'/>
          
            
   
      
   
    </div>
  )
}