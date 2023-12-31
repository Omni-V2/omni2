// // 
// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from '../AuthContext';
// import Link from 'next/link';

// const Login = ({ click, register, setId, userData }: any) => {
//   const auth = useAuth();
//   const { setToken } = auth;

//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [role, setRole] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:3000/api/login', {
//         email: email,
//         password: password,
//       });

//       const { token, id, role } = response.data;

//       if (id && token) {
//         setToken(token);
//         setRole(role);
//         setErrorMessage('');
//         setLoading(false);
//         setId(id);

//         if (role === "user") {
//           console.log("Navigate to user home");
//           // Redirect or navigate to user home
//         } else if (role === "seller") {
//           console.log("Navigate to seller");
//           // Redirect or navigate to seller component
//         } else if (role === "admin") {
//           console.log("Navigate to admin");
//           // Redirect or navigate to admin component
//         }

//       } else {
//         setErrorMessage('Login failed. Please check your credentials.');
//         setLoading(false);
//       }
//     } catch (error) {
//       setErrorMessage('Error during login. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white p-8 shadow-md w-[371px]">
//         <h1 className="text-2xl font-semibold mb-4">Login</h1>
//         <p className="text-gray-600 mb-6">Welcome! Please log in to your account.</p>
//         <form>
//           <input
//             type="text"
//             placeholder="Email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 mb-4 border-b border-silver rounded"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 mb-4 border-b border-silver rounded"
//             required
//           />
//           <div className="text-center mt-4 flex items-center justify-between">
//             <Link href="/adminComponents" onClick={(e)=>handleSubmit(e)}>Login</Link>
//             <span onClick={() => click(!register)} className="text-red text-sm hover:cursor-pointer">Register</span>
//           </div>
//           {errorMessage && (
//             <div className="error-message1">
//               {errorMessage}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import axios from "axios";
import { useAuth } from '../AuthContext';
import Link from 'next/link';


const Login = ({ click, register, setId, userData,router }: any) => {
  const auth = useAuth();
  const { setToken } = auth;

  const navigateToMainPage = () => {
    router.push('/');
  };
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/login', {
        email: email,
        password: password,
      });

      const { token, id, role } = response.data;

      if (id && token) {
        setToken(token);
        setRole(role);
        setErrorMessage('');
        setLoading(false);
        setId(id);
         if (role === "seller") {
          console.log("Navigate to seller");
          router.push("/SellerComp")
        } else if (role === "admin") {
          console.log("Navigate to admin");
          router.push("/adminComponents"); 
        }else {
          navigateToMainPage()
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

  return (
    <div className="flex justify-center">
      <div className="bg-white p-8 shadow-md w-[371px]">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-6">Welcome! Please log in to your account.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border-b border-silver rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border-b border-silver rounded"
            required
          />
          <div className="text-center mt-4 flex items-center justify-between">
            {/* Use a button for form submission */}
            <button type="submit">Login</button>
            <span onClick={() => click(!register)} className="text-red text-sm hover:cursor-pointer">Register</span>
          </div>
          {errorMessage && (
            <div className="error-message1">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

