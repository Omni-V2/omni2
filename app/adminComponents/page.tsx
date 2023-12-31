"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar/page';

const AdminDashboard = () => {
  const [clientCount, setClientCount] = useState<number>(0);
  const [sellerCount, setSellerCount] = useState<number>(0);
  const [UserCount, setUserCount] = useState<number>(0);
  useEffect(() => {
    async function fetchUserCounts() {
      try {
        const userResponse = await axios.get('http://localhost:3000/api/admin/countUsers');
        setClientCount(userResponse.data.userCount);
        
        const response = await axios.get('http://localhost:3000/api/users/getall');
        console.log(response.data)
        const filteredSellers = response.data.filter((user: { role: string }) => user.role === 'seller');
        const filteredUsers = response.data.filter((user: { role: string }) => user.role === 'user')
        setSellerCount(filteredSellers.length);
        setUserCount(filteredUsers.length)
      } catch (error) { 
        console.error('Error fetching user/seller counts:', error);
      }
    }
    fetchUserCounts();
  }, []);

  return (
    <>
     <div className='flex flex-row'>
      <AdminNavBar/>
      <div className='flex  items-center flex-col ml-[250px] '>
      <h1 className="m-0 text-4xl tracking-tight font-extrabold text-center p-4 " >OmniMarket Admin Panel</h1>
      <div>
        <div className="margin: 2% 0 0 2% float:left width:96% after:content:'' display:table clear:both width:96% width:23%">
          <h2 className="text-red text-semibold text-center text-xl space-y-6 py-8">Welcome To Admin Dashboard!</h2>
          <ul className="margin:1rem list-style-type:none margin-0 padding-0 ">
            <li className="text-center text-lg space-y-4 py-6">All Users: {UserCount}</li>
            <li className="text-center text-lg space-y-4 py-6">Sellers: {sellerCount}</li>
            <li className="text-center text-lg space-y-4 py-6">Clients: {clientCount}</li>
          </ul>
        </div>
      </div>
      </div>
     </div>
     
    </>
  );
};

export default AdminDashboard;
