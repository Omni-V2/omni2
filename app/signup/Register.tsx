import { useState } from "react";
import axios from "axios"
import Link from 'next/link'

const Register = ({click,register,setId,setToken,router}:any) => {
  
  const [successMessage, setSuccessMessage] = useState<String>('');
  const [errorMessage, setErrorMessage] = useState<String>('');


  const handleSignup = async (event:any) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const username= formData.get('username')
    const  email= formData.get('email')
    const  password= formData.get('password');
    const  role= formData.get('role');
    console.log('Form Data:', formData);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role)
    console.log("username",username)
    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        username:username,
        email: email,
        password: password,
        role:role
      });
      const navigateToMainPage = () => {
        router.push('/');
      };

     const {token}=response.data
    
      if (email && username && role && token) {
        setToken(token);
        setId(response.data.id);
        setSuccessMessage('Registration successful!');
        setErrorMessage('');
        if (role === "seller") {
          console.log("Navigate to seller");
          router.push("/SellerComp")
        } else if (role === "admin") {
          console.log("Navigate to admin");
          router.push("/adminComponents"); 
        }else {
          navigateToMainPage()
        }
        
      } 
    } catch (error) {
      setSuccessMessage('registration completed');
      console.error('Error during registration:', error);
    }
  };
    return ( 
    <div className="flex justify-center gap-2">
      <div className="bg-white p-8 shadow-md w-[371px]">
      <h1 className="text-2xl font-semibold mb-4">Create An Account</h1>
      <p className="text-gray-600 mb-6">Enter your details below.</p>
      <form   onSubmit={handleSignup} >
      <input type="text" placeholder="Name" name="username" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
      <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
      <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
      <div className="flex items-center mb-4">
      <label>
              <input
                type="radio"
                name="role"
                value="user"
              />
              User
            </label>
            <label>
              <input 
                type="radio"
                name="role"
                value="seller"

              />
              Seller
            </label>
        {/* <input type="checkbox" id="userCheckbox" name="userType" value="user" className="mr-2" />
        <label htmlFor="userCheckbox">User</label>
        <input type="checkbox" id="sellerCheckbox" name="userType" value="seller" className="ml-4 mr-2" />
        <label htmlFor="sellerCheckbox">Seller</label> */}
      </div>
      <button   type="submit">
      <div className="w-[301px] h-[56px] bg-red text-white flex items-center justify-center rounded" > Register</div></button>
      </form>
      {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      {errorMessage && (
          <div className="error-message1">
            {errorMessage}
          </div>
        )}
    
      <div className="flex flex-row justify-center gap-3"><p className="text-grey text-sm">Already have an account?</p><span onClick={()=>click(!register)} className="underline hover:cursor-pointer">log in</span></div>
      </div>
    </div> );
}
 
export default Register;