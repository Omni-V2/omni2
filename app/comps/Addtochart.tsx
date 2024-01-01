"use client"
import React, { useState,useContext } from 'react';
import { DataContext } from '../context';
const Addtochart = ({prod}) => {
    const {handleAddToChartBtn,user }:any=  useContext(DataContext)
    return ( <div className="w-72 absolute bottom-0" >
        <button className="bg-black text-white w-full h-10" onClick={()=>handleAddToChartBtn(user.id,prod)}>Add To Chart</button>
    </div> );
}
 
export default Addtochart;