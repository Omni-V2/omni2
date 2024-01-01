"use client"
import { DataContext } from "../context";
import { useContext } from "react";
const ViewAll = () => {
    const {setGetAllData, getAllData} = useContext(DataContext)
    return ( <div className="w-[234px] h-[56px]">
        <button className="bg-red text-white w-full h-full rounded-md" onClick={()=>setGetAllData(!getAllData)}>View All Products</button>
    </div> );
}
 
export default ViewAll;