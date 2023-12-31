import {useState} from "react"
import axios from "axios"
import { useAuth } from '../AuthContext';
import Link from 'next/link'
const Login = ({click,register,setId,userData}:any) => {
  const auth = useAuth();
  const { setToken } = auth;
  
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event:any) => {

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email= formData.get('email')
        const password =formData.get('password')
        try {
          setLoading(true);
          const response = await axios.post('http://localhost:3000/api/login', {
            email: email,
            password: password,
          });
          console.log(response,"response")
          const {token, id,role} = response.data; 
        
          if (id && token) {
            console.log( id,token,role,"role")
       
           

            // const { token } = response.data;
            setToken(token);
        
            setErrorMessage('');
            setLoading(false);
            setId(id)
            if(role==="user"){
           
              return(  
              <div><Link href="/">Dashboard</Link></div>//isn't this suppose to take the normal user to home? he is not allowed on dashboard
              )
             
            }
            if(role==="seller"){
                return <Link href="/sellerComp">Navigate to seller</Link>//Link here will be added after creating seller component
            }
            if(role==="admin"){
                return <Link href="/adminComponents">Navigate to Admin</Link>;//this is the right path for admin
            }
           
          } else {
       
            setErrorMessage('Login failed. Please check your credentials.');
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage('Error during login. Please try again.');
          setLoading(false);
        }
       
      };
      console.log("here")
    return ( 
        <div className="flex justify-center">
        <div className="bg-white p-8 shadow-md w-[371px]">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-6">Welcome! Please log in to your account.</p>
        <form   onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
            <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
            <div className="text-center mt-4 flex items-center justify-between"><div className="w-[143px] h-[56px] bg-red text-white flex items-center justify-center rounded"><button type="submit" >login</button></div><span onClick={()=>click(!register)} className="text-red text-sm hover:cursor-pointer">Register</span></div>
            {errorMessage && (
          <div className="error-message1">
            {errorMessage}
          </div>)}
        </form>
       
    </div>
    </div>
 );
}
 
export default Login;