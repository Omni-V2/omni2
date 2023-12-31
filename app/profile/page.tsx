"use client"
import React , {useState,useEffect,useContext} from "react"
import { DataContext } from "../context";
import axios from 'axios'
// import Cookies from 'js-cookie';
import Cloudinary from "../adminComponents/cloudinary/page";

interface User {
  
username:string,
email:string,
password:string,
newPassord:string
imageUrl:string[]
}
const Profile = () => {//we need to pass users as props in main directory (import {useIdentity} from '')
const [photo,setPhoto]=useState<string | null>(null)
const[userName,setUserName]=useState<string>("");
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("")
const [newPassword, setNewPassword] = useState<string | null>("")
const {user,setUser}:any=useContext(DataContext)
const [userId,setUserId]=useState<Number>()
const [updatedUser, setUpdatedUser] = useState<User>({
  username:"",
  email:"",
  password:"",
  newPassord:"",
  imageUrl:[] 

});




const setImg = (imageUrl: string) => {
  setUpdatedUser({ ...updatedUser, imageUrl: [...updatedUser.imageUrl, imageUrl] });
};


console.log(user,"user")
useEffect(()=>{


if (true && true) {
  setUserId(user)
  setPassword(password || '')
}else{
  console.log("not allowed")
}
},[])

const handleSubmit = async (event: any) => {

  event.preventDefault();
  try {
   const res= await axios.put(`http://localhost:3000/api/users/${user?.id}`, updatedUser);
    console.log(res.data)

  } catch (error) {
    console.error("Error for update User:", error);
  }
};
const handleInputChange = (event:any) => {
  const { name, value } = event.target;
  setUpdatedUser({ ...updatedUser, [name]: value });
};

// const handleClickCancel = () => {
//   setUserName('');
//   setEmail('');
//   setPassword('');
//   setNewPassword('');
// };






// const Cloudinary = () => {
//   const cloudName: string = 'dcq9dwrsb';
//   const presetName: string = 'l4ng65bl';
//   const [image, setImage] = useState<string>('');

//   const handleUpload = async (file: File) => {
//     const formData: FormData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', presetName);

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//         {
//           method: 'POST',
//           body: formData,
//         }
//       );

//       const data = await response.json();
//       setImage(data.secure_url);
//     } catch (error) {
//       console.error('Error uploading image: ', error);
//     }
//   };

//   const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//   const files = event.target.files;
//   if (files && files.length > 0) {
//   await handleUpload(files[0]);
//   }
//   }};

    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Edit Profile
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          You can update your personel informations here with all confidentiality
          </p>
          <form    onSubmit={handleSubmit} action="#" className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src={photo || undefined || "https://res.cloudinary.com/ddznbll2o/image/upload/v1701780996/cld-sample.jpg"} alt="Current profile photo" />
                </div>
                <label className="block justfy-center space-x-6">
                  <span className="sr-only">Choose profile photo</span>
                  <input type="file" 
                  onChange={handleInputChange}
                  className="block w-full justfy-center text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  hover:font-semibold"/>
                  </label>
                  </div>
          <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your username
              </label>
              <input
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Full Name"
              onChange={ handleInputChange}
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your password
              </label>
              <input
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="password"
                required
              onChange={handleInputChange}
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your new password
              </label>
              <input
              id="newPassword"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Full Name"
              onChange={handleInputChange}
              ></input>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
              onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-10 ml-[190px]">
            <button
              type="submit"
              className="py-2 px-4 font-semibold text-center text-white rounded bg-red w-[20px] h-[40px] sm:w-fit hover:bg-white  hover:text-red hover:focus:ring-4 focus:outline dark:focus:ring-primary-300 dark:bg-primary-600"
       
              >
              Save changes
            </button>
          
            <button
              type="submit"
              className=" ml-[10px]bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-800 rounded"
              
              >
              Cancel
            </button>
            </div>
            
          </form>
        </div>
      </section>
    );
  };

  export default Profile;
