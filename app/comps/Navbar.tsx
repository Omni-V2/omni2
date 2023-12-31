import React from 'react';
import Link from 'next/link';
import DropNavbar from '../dropNavBar/page';
import Search from '../search/page';

interface TabPage {
  name: string;
  href: string;
}

const tabPages: TabPage[] = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/AboutUs' },
  { name: 'Sign up', href: '/signup' }
];

const Navbar = () => {
  return (
    <div className='top-0'>
      <nav className="bg-white w-full">
        <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
          <h3 className='text-'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
          <span className='text-lg underline cursor-pointer ml-11'>Shop Now!</span>
          <select value='English' className='absolute right-5 text-white bg-black' title='Language Select'>
            <option value='English'>English</option>
          </select>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between px-3 h-[80px]">
          <div className='flex items-center space-x-4'>
            <Link href={'/'}>
              <img
                src="https://i.ibb.co/0fqcpNw/nav-Bar-logo-transparent.png"
                className="w-70 h-12"
                alt="OMNI Logo"
                loading="lazy"
              />
            </Link>
          </div>
          {tabPages.map((tabPage) => (
            <div className="justfy-center space-x-3" key={tabPage.name}>
              <Link href={tabPage.href}>
                <span className="text-gray-600 hover:text-base hover:font-semibold hover:underline">{tabPage.name}</span>
              </Link>
            </div>
          ))}
          <div className="relative flex items-center space-x-4 mr-[80px]">
            <Search />
            <Link href={'/Cart '}>
               <span className="[&>svg]:w-5 hover:drop-shadow-2xl hover:bg-gray cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
               <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
               <span id="item-count" className="absolute top-75 left-1390 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2 text-xs h-10 w-10 flex justify-center items-center">32</span>
               </svg>
             </span>
               </Link>
               <Link href={'/WishList'}>
             <span className="[&>svg]:w-5 hover:drop-shadow-2xl hover:bg-gray-200 cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                 </svg>
               </span>
             </Link>
            <div className="relative">
              <DropNavbar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
