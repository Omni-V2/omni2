"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../adminNavBar/page';

interface Seller {
  id: number;
  username: string;
  email: string;
  password: string;
  address: string;
  firstName: string;
  lastName: string;
  role: string;
}

const SellerList = () => {
  const [sellers, setSellers] = useState<any[]>([]); 

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get<Seller[]>('http://localhost:3000/api/users/getall');
        const filteredSellers = response.data.filter((user: Seller) => user.role === 'seller'); 
        setSellers(filteredSellers);
      } catch (error) {
        console.error('Error fetching sellers:', error);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div className='flex flex-row'>
    <AdminNavBar/>
    <div className='flex  items-center flex-col ml-[250px] '>
      <h1 className='m-0 text-4xl tracking-tight font-extrabold text-center p-4'>Sellers List</h1>
      <table className='w-full m-2'>
        <thead>
          <tr>
            <th className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>ID</th>
            <th className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>UserName</th>
            <th className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Email</th>
            <th className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Password</th>
            <th className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Role</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((Oneseller: Seller) => (
            <tr key={Oneseller.id} className='hover:bg-gray-100'>
              <td className='text-base py-2 px-4'>{Oneseller.id}</td>
              <td className='text-base py-2 px-4'>{Oneseller.username}</td>
              <td className='text-base py-2 px-4'>{Oneseller.email}</td>
              <td className='text-base py-2 px-4'>{Oneseller.password}</td>
             
              <td className='text-base py-2 px-4'>{Oneseller.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default SellerList;
