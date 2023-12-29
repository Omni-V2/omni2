"use client"

import Link from 'next/link';
import { useState } from 'react';
import Cart from '../Cart/page';
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
    {name:'About',href:"/AboutUs"},
    {name:'Sign up',href:"/signup"}
  
  ]
  
  const settings: Setting[] = [
    { name: 'Manage My Account', href: '/profile' },
    { name: 'My Order', href: '/orders' },
    { name: 'Logout', href: '/signIn' }
  ];
  
  
const  Navbar= () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (  
        <div className='top-0'>

        
        <nav className="bg-white w-full  ">
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
           <div className="justfy-center space-x-3  " key={tabPage.name}>
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
               <Link href={'/Cart '}>
               <span className="[&>svg]:w-5 hover:drop-shadow-xl hover:bg-gray-200 cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
               <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
               </svg>
             </span>
               </Link>
             
               <span className="[&>svg]:w-5 hover:drop-shadow-xl hover:bg-gray-200 cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                 </svg>
               </span>
               <div className="relative flex">
               <button id="avatarButton" 
               data-dropdown-toggle="userDropdown" 
               data-dropdown-placement="bottom" 
               className="w-10 h-10 rounded-full cursor-pointer " 
               onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
               <img className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
               src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" 
               alt="User dropdown" />
             </button>
             <div id="userDropdown" 
             className={`absolute top-full left-0 z-40  -ml-[118px] ${isDropdownOpen ? '' : 'hidden'}` }style={{backgroundColor: 'rgba(128, 128, 128, 0.53)',}}> 
             <div className='mr-[40px]'>
             <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
       <div>Bonnie Green</div>
       <div className="font-medium truncate">name@user.com</div>
     </div>
     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="avatarButton">
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
           
       </div>
       </nav>
          
       </div>
    );
}
 
export default Navbar ;