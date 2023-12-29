const Register = ({click,register}) => {
  
    return ( 
    <div className="flex justify-center gap-2">
      <div className="bg-white p-8 shadow-md w-[371px]">
      <h1 className="text-2xl font-semibold mb-4">Create An Account</h1>
      <p className="text-gray-600 mb-6">Enter your details below.</p>
      <form>
      <input type="text" placeholder="Name" name="name" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
      <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
      <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
      <div className="flex items-center mb-4">
        <input type="checkbox" id="userCheckbox" name="userType" value="user" className="mr-2" />
        <label htmlFor="userCheckbox">User</label>
        <input type="checkbox" id="sellerCheckbox" name="userType" value="seller" className="ml-4 mr-2" />
        <label htmlFor="sellerCheckbox">Seller</label>
      </div>
      </form>
      <div className="w-[301px] h-[56px] bg-red text-white flex items-center justify-center rounded"><button>Register</button></div>
      <div className="flex flex-row justify-center gap-3"><p className="text-grey text-sm">Already have an account?</p><span onClick={()=>click(!register)} className="underline hover:cursor-pointer">log in</span></div>
      </div>
    </div> );
}
 
export default Register;