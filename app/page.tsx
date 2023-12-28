"use client"
import Image from 'next/image'
import Link from 'next/link';
import Allsales from './comps/Allsales'
import { useState } from 'react';
interface TabPage{
  name:string;
  href:string;
}

interface Setting {
  name:string;
  href:string;
}

const tabPages:TabPage[]=[
  {name:'Home',href:"/"},
  {name:'Contact',href:"/contact"},
  {name:'About',href:"/about"},
  {name:'Sign up',href:"/signup"}

]

const settings: Setting[] = [
  { name: 'Manage My Account', href: '/profile' },
  { name: 'My Order', href: '/orders' },
  { name: 'Logout', href: '/signIn' }
];

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
    <nav className="bg-white w-full ">
       <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
            <h3 className='text-'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
            <span className=' text-lg underline cursor-pointer ml-11'>Shop Now!</span>
            <select value='English' className='absolute right-5 text-white bg-black' title='Language Select'>
              <option value='English'>English</option>
            </select>
        </div>
      <div className="flex w-full flex-wrap items-center justify-between px-3 h-[80px]">
        <div className='flex items-center space-x-4'>
          <Link href={'/'}><img
              src="https://i.ibb.co/0fqcpNw/nav-Bar-logo-transparent.png"
              className="w-70 h-12"
              alt="OMNI Logo"
              loading="lazy" 
              /></Link>
            
        </div>
        {tabPages.map((tabPage) => (
          <div className="justfy-centre space-x-3 mr-[60px]" key={tabPage.name}>
            <Link href={tabPage.href}>
              <span className="text-gray-600 hover:text-base hover:font-semibold hover:underline">{tabPage.name}</span>
            </Link>
          </div>
        ))}
        <div className="relative flex items-center space-x-4 mr-[80px]">
        <div className="relative">
        <input
    className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-45 py-1 px-2 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm"
    id="username"
    type="text"
    placeholder="Search..."
  />
  <div className="absolute right-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-3 mr-1 h-4 w-4 text-gray-400 hover:text-gray-500 hover:semibold"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5" 
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
  </div>
  <div className="absolute left-0 inset-y-0 flex items-center ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-1 text-gray-400 hover:text-gray-500 hover:semibold hover:drop-shadow-xl"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
            <span className="[&>svg]:w-5 hover:drop-shadow-xl hover:bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </span>
              <span className="[&>svg]:w-5 hover:drop-shadow-xl hover:bg-gray-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </span>
              <div className="relative flex">
              <button id="avatarButton" 
              data-dropdown-toggle="userDropdown" 
              data-dropdown-placement="bottom" 
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" 
              alt="User dropdown" />
            </button>
            <div id="userDropdown" 
            className={`absolute top-full left-0 z-40 ${isDropdownOpen ? '' : 'hidden'}`}>
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@user.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      {settings.map((setting)=>(
      <li key ={setting.name}>
      <a href={setting.href ?? '#'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{setting.name}</a>
    </li>
      ))}
      </ul>
</div>
                </div>
          </div>
          
      </div>
      <hr className='text-gray-300'/>
      <div className='-mt-[50px]'>
      
           <div className=' flex justify-start m-11 gap-32 mt-[100px]'>
           <div id="unique" className=''>
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
           <div className=' w-4/5 h-96 bg-black grid grid-cols-2 mb-[50px]'>
            <div className='flex items-center ml-32'>
            <div className='grid gap-8'>
            <span>
            <h1 className='text-white float-right text-2xl ml-4 mt-3'>iPhone 14 Series</h1>
            <img className=' w-12 overflow-hidden' src="data:image/png;base64,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" alt="" />
            </span>
            <h1 className='text-5xl text-white	'>Up to 10%<br/> of Voucher</h1>
            </div>
            <button id='button-home' className='text-white absolute underline mt-[200px]'>Shop Now</button>
           

            </div>
            
            <img className=' w-full' src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_810,w_1440,x_0,y_0/dpr_2.0/c_limit,w_600/f_jpg/fl_lossy,q_auto/v1663274763/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large_zkrjt9" alt="" />
           </div>
           </div>
      </div>
           <hr id="hr-unique" className=' rotate-90 w-96 -mt-[300px] text-gray-300'/>
    </nav>
    <div className='mt-[350px]'><Allsales/></div>
    </div>
   
  )
}