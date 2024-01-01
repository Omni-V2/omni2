import Addtochart from "./Addtochart";
import ProdImage from './ProdImage'
import { useContext } from 'react';
import { DataContext } from '../context'
import Single from "./SingleProd";
const BestSelling = () => {
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
      console.log("best",products);
    return ( 
        <div className='flex flex-row justify-center gap-10'>
        {products.filter((e:ProductType,i:number)=>e.sales!==0).map((el:ProductType,i:number)=><Single key={i} data={el}/>)}
    </div> 
     );
}
 
export default BestSelling;