import Addtochart from "./Addtochart";
import ProdImage from './ProdImage'


const BestSelling = () => {
    return ( 
        <div className="flex flex-col gap-2">
        <div className="relative">
  
       
            <ProdImage img="" sales=''/>
            <Addtochart />
           
        </div>
        <div className="flex flex-col gap-2">
            <h2>3FDFD</h2>
           <div className=" flex flex-row gap-5">
              <span className="text-red">123Dt</span>
              <span className="line-through">32Dt</span>
           </div> 
        </div>
    </div>
     );
}
 
export default BestSelling;