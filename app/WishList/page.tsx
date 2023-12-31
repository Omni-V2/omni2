"use client"
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../context';

function WhishList() {
  const [loggedId, setId] = useState("");
  const [wish, setWish] = useState([]);
  const { handleAddToChartBtn, products,user }: any = useContext(DataContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/wish/${user.id}`)
      .then((result) => {
        const wishPromises = result.data.map((wish: any) => {
          return axios.get(`http://localhost:3000/api/products/${wish.ProductId}`);
        });

        Promise.all(wishPromises)
          .then((responses) => {
            const productsData: any = responses.map((response) => response.data);
            setWish(productsData);
          })
          .catch((err) => {
            console.error(err);
          });
      });
  }, []);

  console.log('wishh', wish);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">Wishlist ({wish.length})</span>
        <button className="border border-black px-4 py-2 rounded cursor-pointer">Move All To Bag</button>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {wish.map((e: any, i) => (
          <div key={i} className="w-1/4 bg-white p-4 shadow-md">
            <div className="relative">
              <img src={e.imageUrl[0]} alt="" className="w-full h-40 object-cover mb-2" />
              <button
                onClick={() => handleAddToChartBtn(loggedId, wish[i])}
                className="bg-black text-white py-1 px-2 absolute bottom-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity"
              >
                Add To Cart
              </button>
            </div>
            <div className="text-sm">
              <div className="font-bold mb-1">{e.productName}</div>
              <div className="text-blue-500">{e.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className="w-4 h-8 bg-red-700 mr-2"></div>
          <h2 className="text-lg font-bold">Just For You</h2>
        </div>
        <button className="border border-black px-4 py-2 rounded cursor-pointer">See All</button>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {products.map((e: any, i: number) => (
          <div key={i} className="w-1/4 bg-white p-4 shadow-md">
            <div className="relative">
              <img src={e.imageUrl} alt="" className="w-full h-40 object-cover mb-2" />
              <button
                className="bg-black text-white py-1 px-2 absolute bottom-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity"
              >
                Add To Cart
              </button>
            </div>
            <div className="text-sm">
              <div className="font-bold mb-1">{e.productName}</div>
              <div className="text-blue-500">{e.price}Dt</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhishList;
