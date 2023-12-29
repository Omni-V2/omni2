"use client"

import React , {useState} from "react"



const Profile = () => {
const [photo,setPhoto]=useState("")
const[fullName,setFullName]=useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")

// const handlephotoChange = (event) => {
// setphoto(event.target.value);
// };
// const handleFullNameChange = (event) => {
//   setFullName(event.target.value);
// };

// const handleEmailChange = (event) => {
//   setEmail(event.target.value);
// };

// const handlePasswordChange = (event) => {
//   setPassword(event.target.value);
// };

    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Edit Profile
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          You can update your personel informations here with all confidentiality
          </p>
          <form action="#" className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c" alt="Current profile photo" />
                </div>
                <label className="block justfy-center space-x-6">
                  <span className="sr-only">Choose profile photo</span>
                  <input type="file" 
                  // onchange="loadFile(event)" 
                  className="block w-full justfy-center text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  hover:font-semibold"/>
                  </label>
                  </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your full name
              </label>
              <input
                id="fullName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Full Name"
                // onChange={handleFullNameChange}
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your new password
              </label>
              <input
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="password"
              // onChange={handleEmailChange}
              ></input>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
              // onChange={handleEmailChange}
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 font-semibold text-center text-white rounded bg-red w-[20px] h-[40px] sm:w-fit hover:bg-white  hover:text-red hover:focus:ring-4 focus:outline dark:focus:ring-primary-300 dark:bg-primary-600">
              Save changes
            </button>
            <button
              type="submit"
              className="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-800 rounded">
              Cancel
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Profile;
  