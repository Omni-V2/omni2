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
const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/getall');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (Id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${Id}`);
      const response = await axios.get('http://localhost:3000/api/users/getall');
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='flex flex-row'>
    <AdminNavBar/>
    <div className='flex  items-center flex-col ml-[250px] '>
      <h1 className='m-0 py-4 text-4xl font-extrabold text-center text-gray-900 dark:text-black'>User List</h1>
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
            <th className='text-left font-semibold text-xs uppercase border-b border-gray-300 py-2 px-4'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr className='hover:bg-gray-100' key={user.id}>
              <td className='py-2 px-4'>{user.id}</td>
              <td className='py-2 px-4'>{user.username}</td>
              <td className='py-2 px-4'>{user.email}</td>
              <td className='py-2 px-4'>{user.password}</td>
              <td className='py-2 px-4'>{user.address}</td>
              <td className='py-2 px-4'>{user.firstName}</td>
              <td className='py-2 px-4'>{user.lastName}</td>
              <td className='py-2 px-4'>{user.role}</td>
              <td>
                <button 
                type="submit"
                className='ml-[10px] bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-800 rounded"'
                onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserList;

