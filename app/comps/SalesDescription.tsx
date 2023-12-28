import Square from "../comps/Square";

const salesDesc = () => {
    return ( 
    <div className="flex flex-col mr-[1200px] gap-5">
        <div className="flex flex-row gap-2"><Square/> 
        <span className="text-red flex items-center">today's</span>
        </div>
        <div>
            <span>Flash sales</span>
        </div>
    </div> );
}
 
export default salesDesc;