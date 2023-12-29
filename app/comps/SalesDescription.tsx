import Square from "../comps/Square";
import CountdownTimer from "./Countdown";

const salesDesc = () => {
    return ( 
        <div className="flex flex-row justify-between items-center">
    <div className="flex flex-col mr-[900px] gap-5">
        <div className="flex flex-row gap-2"><Square/> 
        <span className="text-red flex items-center">today's</span>
        </div>
        <div className="">
         <span className="text-[40px]">Flash sales</span>
        </div>
    </div>
    <div className="flex items-center"><CountdownTimer/></div>
    </div> );
}
 
export default salesDesc;