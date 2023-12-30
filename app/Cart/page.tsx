
"use client"
import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";


interface CartItem {
  CartID: string;
  CartImage: string;
  Price: number;
  quantity: number;
}

const Cart = () => {
    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [refresh, setRefresh] = useState(false);


    const calculateSubtotal = (quantity: number, price: number): number => {
        return quantity * price;
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
      
             
                <div
                  
                  className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <img className='w-10 ml-10' src='df' alt='' />
                  <h1 className='ml-10'>234</h1>
                  <input
                    className='w-10 ml-10 border-gray-300 border rounded'
                    type='number'
                  />
                  <h1 className='ml-20'>233$</h1>
                  <MdDelete className='ml-10 cursor-pointer' />
                </div>
             
      
              <div>
                <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm'></button>
                <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm float-right mr-56'></button>
              </div>
      
              <div className='mt-20 '>
                <input
                  className='border-gray-300 border rounded w-48 h-12 text-center text-sm'
                  type='text'
                  placeholder='Coupon Code'
                />
                <button className='ml-3 bg-red w-40 h-12 border rounded text-white text-sm'>Apply Coupon</button>
              </div>
      
              <div className='float-right -mt-28 mr-56  shadow border-black border rounded w-80 h-64  text-start  '>
                <h1 className='ml-5 mt-2'>Cart Total</h1>
                <h3 className='ml-5 mt-6'>Subtotal:$</h3>
                <hr className='text-gray-300 w-5/6 text-center' />
                <h3 className='ml-5 mt-6'>Shipping: Free</h3>
                <hr className='text-gray-300 w-5/6' />
                <h3 className='ml-5 mt-6'>Total: $</h3>
                <button
                  className='shadow border-gray-300 border rounded ml-20 bg-red text-white w-48 h-12 mt-4'
                 
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
           
      
      
      </div>
    );
}
 
export default Cart;