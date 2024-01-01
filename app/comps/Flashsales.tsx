"use client"
import React,{ useContext } from 'react';
import { DataContext } from '../context'
import Single from './SingleProd';
const Flash = () => {
    type ProductType = {
        id: number; 
        productName: string;
        rating:number;
        price:number;
        description:string;
        imageUrl:any;
        categories:any;
        size:string;
        color:string;
        sales:number;
        available:string;
        UserId:number;
        createdAt:any;
        updatedAt:any;
      };
    const { products } = useContext(DataContext);
    console.log("flash",products);
    
    return ( <div className='flex flex-row flex-wrap justify-center gap-10'>
        {products.filter((e:ProductType,i:number)=>e.sales!==0).map((el:ProductType,i:number)=><Single key={i} data={el}/>)}
    </div> );
}
 
export default Flash;