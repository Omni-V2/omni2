import Square from "../comps/Square";
const BroweDS = () => {
    return ( 
        <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col mr-[900px] gap-5">
            <div className="flex flex-row gap-2"><Square/> 
            <span className="text-red flex items-center">Category</span>
            </div>
            <div className="">
             <span className="text-[40px]">Browse Buy Category</span>
            </div>
        </div>
        </div> 
     );
}
 
export default BroweDS;