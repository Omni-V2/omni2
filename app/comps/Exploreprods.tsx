import React,{ useContext } from 'react';
import Single from './SingleProd';
import { DataContext } from '../context'
const ExploreProds = () => {
    const { products } = useContext(DataContext);
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
    return ( 
        <div className='flex flex-row flex-wrap justify-center gap-10'>
        {products.map((el:ProductType,i:number)=><Single key={i} data={el}/>)}
        <img src="" alt="" />
    </div> 

    );
}
 
export default ExploreProds;