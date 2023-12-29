const Login = ({click,register}) => {
    return ( 
        <div className="flex justify-center">
        <div className="bg-white p-8 shadow-md w-[371px]">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-6">Welcome! Please log in to your account.</p>
        <form>
            <input type="text" placeholder="Email" name="email" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
            <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 mb-4 border-b border-silver rounded" required />
        </form>
        <div className="text-center mt-4 flex items-center justify-between"><div className="w-[143px] h-[56px] bg-red text-white flex items-center justify-center rounded"><button >login</button></div><span onClick={()=>click(!register)} className="text-red text-sm hover:cursor-pointer">Register</span></div>
    </div>
    </div>
 );
}
 
export default Login;