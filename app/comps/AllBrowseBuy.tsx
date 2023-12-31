import BroweDS from "./BrosweBuyDS";
import BrowseBuyCat from "./BrowseBuyCat";

const AllBrowseBuy = () => {
    return ( 
        <div className="flex flex-col items-center gap-10">
            <BroweDS/>
            <BrowseBuyCat/>
        </div>
     );
}
 
export default AllBrowseBuy;