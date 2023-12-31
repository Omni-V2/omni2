"use client"
import React, { useState,useContext } from 'react';
import Login from "./Login";
import Register from './Register';
import { DataContext } from '../context';
import { useRouter } from 'next/navigation';
const page = () => {
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const {userId, setUserId,user }:any=  useContext(DataContext)
    const router = useRouter();
    const handleLogin = (id: number) => {
      setUserId(id);
      
    };
    console.log(user,"userid")
    return ( 
    <div className="flex flex-row gap-40 items-center mt-10">
       <img className="w-[805px] ml-[40px]" src="https://images-ext-1.discordapp.net/external/cLI-5nniI7SCWx0crvR0wvNuG6rvpUSJQATsEtN_tDc/https/i.ibb.co/6W1WTg3/moving-logo4.gif?width=767&height=545" alt="" />
       <div>
        {isRegistering ? (
          <Register click={setIsRegistering}    setId={handleLogin} register={isRegistering} />
        ) : (
          <Login    click={setIsRegistering}   setId={handleLogin} register={isRegistering} router={router} />
        )}
      </div>
    </div> );
}
 
export default page