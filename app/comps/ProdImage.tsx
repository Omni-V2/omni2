"use client"
import React,{ useContext } from 'react';
import { DataContext } from '../context'
import Image from "next/image";
import Link from 'next/link';
const  img= ({img,sales,prod}) => {
  const {  setOneproduct} = useContext(DataContext);
    return ( 
        <div className="relative w-72 h-64 bg-lightgrey flex items-center justify-center">
        {sales !== 0 && (
          <div className="absolute top-1 left-1 bg-red text-white p-2 rounded">
           -{sales}%
          </div>
        )}
        <Link href="/products" onClick={() =>  setOneproduct(prod)}><Image width={172} height={152} src={img[0]} alt=""  /></Link>
      </div>
    );
}
 
export default img;