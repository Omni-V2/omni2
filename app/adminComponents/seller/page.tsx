"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const SellerList = () => {
  const [sellers, setSellers] = useState<any[]>([]); 

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/getall');
        const filteredSellers = response.data.filter((user: any) => user.role === 'sellers'); 
        setSellers(filteredSellers);
      } catch (error) {
        console.error('Error fetching sellers:', error);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div>
      <h1 className='m-0 text-4xl tracking-tight font-extrabold text-center p-4'>Sellers List</h1>
      <table className='w-full m-2'>
        <thead>
          <tr>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>ID</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>UserName</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>Email</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>Password</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>Address</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>First Name</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>Last Name</th>
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>Role</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller: any) => (
            <tr key={seller.id} className='hover:bg-gray-100'>
              <td className='py-2 px-4'>{seller.id}</td>
              <td className='py-2 px-4'>{seller.username}</td>
              <td className='py-2 px-4'>{seller.email}</td>
              <td className='py-2 px-4'>{seller.password}</td>
              <td className='py-2 px-4'>{seller.address}</td>
              <td className='py-2 px-4'>{seller.firstName}</td>
              <td className='py-2 px-4'>{seller.lastName}</td>
              <td className='py-2 px-4'>{seller.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerList;
