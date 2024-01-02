"use client"
import React, { useState,useContext } from 'react';
import Link from 'next/link';
import { DataContext } from '../context';
interface Setting {
  name: string;
  href: string;
}

const settings: Setting[] = [
  { name: 'Manage My Account', href: '/profile' },
  { name: 'My Order', href: '/orders' },
  { name: 'Logout', href: '/signup/' }
];

const DropNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {user }:any=  useContext(DataContext)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <button
        id="avatarButton"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom"
        className="w-10 h-10 rounded-full hover:drop-shadow-2xl cursor-pointer relative"
        onClick={toggleDropdown}
      >
        <img
          className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          alt="User dropdown"
          
        />
      </button>
      <div
        id="userDropdown"
        className={`absolute top-full left-0 z-40 -ml-[118px] ${isDropdownOpen ? '' : 'hidden'}`}
        style={{ backgroundColor: 'rgba(128, 128, 128, 0.53)' }}
      >
        <div className='mr-[40px]'>
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white dark:hover:text-gray-700">
            <div>{user.username}</div>
            <div className="font-medium truncate">{user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            {settings.map((setting) => (
              <li key={setting.name}>
                <Link href={setting.href} passHref>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {setting.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropNavbar;

