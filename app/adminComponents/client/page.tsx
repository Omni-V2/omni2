"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../adminNavBar/page';


interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  address: string;
  firstName: string;
  lastName: string;
  role: string;
}

const UserListPage = () => {
  const [users,setUsers]=useState<User[]>([])

  useEffect(()=>{
    const fetchUsers = async ()=>{
      try {
        const response = await axios.get<User[]>('http://localhost:3000/api/users/getall');
        const filteredUsers = response.data.filter((user:User) => user.role === 'user');
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className='flex flex-row'>
    <AdminNavBar/>
    <div className='flex  items-center flex-col ml-[250px] '>
      <h1 className='m-0 py-4 text-4xl font-extrabold space-y-4 text-center text-gray-900 dark:text-black'>Users List</h1>
      <table className='w-full border-collapse w-96% m-2%'>
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
          {users.map((oneUser: User) => (
            <tr key={oneUser.id} className='hover:bg-rgba(0, 0, 0, 0.1)'>
              <td className='text-base py-2 px-4'>{oneUser.id}</td>
              <td className='text-base py-2 px-4'>{oneUser.username}</td>
              <td className='text-base py-2 px-4'>{oneUser.email}</td>
              <td className='text-base py-2 px-4'>{oneUser.password}</td>
           
              <td className='text-base py-2 px-4'>{oneUser.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserListPage;
