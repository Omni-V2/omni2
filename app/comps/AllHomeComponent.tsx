import AllBestSales from "./AllBestSales";
import AllBrowseBuy from "./AllBrowseBuy";
import AllExplore from "./Allexplore";
import Product from "./Allsales";
import Details from "./Details";



const AllHomeComponent = () => {
    return ( 
        <div className="space-y-[145px]">
            <Product/>
            <AllBestSales/>
            <AllBrowseBuy/>
            <AllExplore/>          
            <Details/>
            
        </div>
     );
}
 
export default AllHomeComponent;