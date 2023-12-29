import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './dashboard.css'
import Link from 'next/link';

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState<number>(0);
  const [sellerCount, setSellerCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserCounts() {
      try {
        const userResponse = await axios.get('http://localhost:3000/api/admin/countUsers');
        setUserCount(userResponse.data.userCount);
        const response = await axios.get('http://localhost:3000/api/admin/countUsers');
        const filteredSellers = response.data.filter((user: { role: string }) => user.role === 'seller');
        setSellerCount(filteredSellers.length);
      } catch (error) { 
        console.error('Error fetching user/seller counts:', error);
      }
    }
    fetchUserCounts();
  }, []);

  return (
    <>
      <header role="banner">
        <h1>OmniMarket Admin Panel</h1>
        <ul className={styles.utilities}>
          <li className={styles.users}><a href="#">My Account</a></li>
          <li><a onClick={() => router.push('/Login')} href="">Logout</a></li>
        </ul>
      </header>

      <nav role="navigation">
        <ul className={styles.main}>
          <li className={styles.dashboard}><a href="admin">Dashboard</a></li>
          <li className={styles.users}><Link href="/clients">Clients</Link></li>
          <li className={styles.comments}><Link href="/sellers">Sellers</Link></li>
          <li className={styles.write}><Link href="/products">Products</Link></li>
          <li className={styles.users}><Link href="/users">Manage Users</Link></li>
        </ul>
      </nav>

      <main role="main">
        <section className={styles.panel}>
          <h2>Welcome To Admin Dashboard!</h2>
          <ul>
            <li>All Users: {userCount}</li>
            <li>Sellers: {sellerCount}</li>
            <li>Clients: {userCount}</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
