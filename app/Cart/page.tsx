"use client"
import React, { useState,useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { DataContext } from '../context';
import axios from "axios";
import Link from 'next/link';

interface CartItem {
  id: number;
  quantity: number;
  product: {
    id: number;
    productName: string;
    price: number;
    imageUrl: string[];
  };
}
interface CartPageProps {
  user: {
    id: number;
  };
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showOrder, setShowOrder] = useState(false);
  const { cartList, setCartList,user } = useContext(DataContext);
  const [notification, setNotification] = useState<string>('');
  const [couponCode, setCouponCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedCart = cartList.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 7;
    const totalBeforeDiscount = subtotal + shipping;

    const discountedTotal = totalBeforeDiscount - totalBeforeDiscount * discount;

    return discountedTotal;
  };

  // const calculateSubtotal = () => {
  //   return cartList.reduce((acc, cartItem) => {
  //     return acc + cartItem.product.price * cartItem.quantity;
  //   }, 0);
  // };

  const checkout = () => {
    const axiosRequests = cartList.map((e, i) =>
      axios.post('http://localhost:3000/api/cart', {
        UserId: user.id,
        ProductId: e.product.id,
        quantity: e.quantity,
        total: calculateTotal(),
      })
    );
    Promise.all(axiosRequests)
      .then((responses) => {
        setCartList([]);
      })
      .catch((err) => console.log(err));
  };

  const handleBothCheckouts = () => {
    checkout();
  };

  const handleCouponApply = () => {
    if (couponCode === 'RBK20') {
      setDiscount(0.2);
      setNotification('Congratulations: You got a 20% discount!');
    } else {
      setNotification('Invalid coupon code.');
    }
  };

    return (  
        <div>
 
        <div className='ml-40 mt-20'>
              <h1 className='text-gray-300'>
                Home / <span className='text-black'> Cart</span>
              </h1>
      
              <div className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '>
                <h1 className='ml-20'>Product</h1>
                <h1 className='ml-20'>Price</h1>
                <h1 className='ml-20'>Quantity</h1>
                <h1 className='ml-10'>Subtotal</h1>
              </div>
      
                {cartList.map((cartItem,i)=>(
                   <div
                   className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '
                   style={{ display: 'flex', justifyContent: 'space-around' }}
                 >
                   <img className='w-10 ml-10' src='df' alt='' />
                   <h1 className='ml-10'>234</h1>
                   <input
                     className='w-10 ml-10 border-gray-300 border rounded'
                     type='number'
                     value={cartItem.quantity}
                     onChange={(e) =>
                       handleQuantityChange(cartItem.product.id, parseInt(e.target.value))
                     }
                   />
                   <h1 className='ml-20'>233$</h1>
                   <MdDelete className='ml-10 cursor-pointer' />
                 </div>
                ))}
               
             
      
              <div>
                <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm'></button>
                <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm float-right mr-56'></button>
              </div>
      
              <div className='mt-20 '>
                <input
                  className='border-gray-300 border rounded w-48 h-12 text-center text-sm'
                  type='text'
                  placeholder='Coupon Code'
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className='ml-3 bg-red w-40 h-12 border rounded text-white text-sm' onClick={()=>{handleCouponApply}}>Apply Coupon</button>
                {notification && <p>{notification}</p>}
               
              </div>
             
      
              <div className='float-right -mt-28 mr-56  shadow border-black border rounded w-80 h-64  text-start  '>
                <h1 className='ml-5 mt-2'>Cart Total</h1>
                <h3 className='ml-5 mt-6'>Subtotal:$</h3>
                <hr className='text-gray-300 w-5/6 text-center' />
                <h3 className='ml-5 mt-6'>Shipping: Free</h3>
                <hr className='text-gray-300 w-5/6' />
                {/* <h3 className='ml-5 mt-6'>Total:{calculateSubtotal()} $</h3> */}
                <Link href={'/Cartchekout/chekout'}>
                <button
                  className='shadow border-gray-300 border rounded ml-20 bg-red text-white w-48 h-12 mt-4'
                 onClick={()=>{handleBothCheckouts;}}
                >
                  Proceed to checkout
                </button>
                </Link>
               
              </div>
            </div>
           
      
      
      </div>
    );
}
 
export default Cart;