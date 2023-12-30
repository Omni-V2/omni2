import { useState, useEffect } from 'react';
import axios from 'axios';

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

interface UserListProps {
  users: User[];
}

const UserListPage = ({ users }: UserListProps) => {
  return (
    <div>
      <h1 className='m-0 font-light py-4 text-4xl font-extrabold text-center text-gray-900 dark:text-black'>Users List</h1>
      <table className='border-collapse w-96% m-2%'>
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
          {users.map((user: User) => (
            <tr key={user.id} className='hover:bg-rgba(0, 0, 0, 0.1)'>
              <td className='py-2 px-4'>{user.id}</td>
              <td className='py-2 px-4'>{user.username}</td>
              <td className='py-2 px-4'>{user.email}</td>
              <td className='py-2 px-4'>{user.password}</td>
              <td className='py-2 px-4'>{user.address}</td>
              <td className='py-2 px-4'>{user.firstName}</td>
              <td className='py-2 px-4'>{user.lastName}</td>
              <td className='py-2 px-4'>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get<User[]>('http://localhost:3000/api/users/getall');
//     const filteredUsers = response.data.filter((user) => user.role === 'user');
//     return {
//       props: {
//         users: filteredUsers,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     return {
//       props: {
//         users: [],
//       },
//     };
//   }
// }

export default UserListPage;
