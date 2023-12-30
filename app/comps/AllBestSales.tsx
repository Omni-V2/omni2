import BestDesciption from "./BestDescription";
import BestSelling from "./BestSelling";

const AllBestSales = () => {
    return ( 
        <div  className="flex flex-col items-center gap-10">
           
            <BestDesciption/>
            <BestSelling/>
            <img src="https://i.postimg.cc/tTpQnGhB/Frame-600.png" alt="" />
        </div>
     );
}
 
export default AllBestSales;