
import { useState } from "react";
 const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }

  return (
    <div className="flex items-center justify-center content-center h-screen w-screen bg-black">
        
        <div className="border-2 border-emerald-500 justify-center content-center p-14 rounded-4xl" >
            
            <form 
            onSubmit={(e)=>{
                submitHandler(e);
            }}
            action="" className=" flex flex-col ">
                <input
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                 type="email" name="" id="" placeholder="Enter Email" className="px-10 py-3 rounded-full  border-2 placeholder:text-amber-50 text-white outline-none bg-transparent border-emerald-400"/>
                
                <input 
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password" name="" id="" placeholder="Enter Password" className="px-10 py-3 placeholder:text-amber-50 rounded-full  border-2 text-white mt-4 outline-none bg-transparent border-emerald-400 "/>
                
                <button
                 className="h-15 w-35 justify-center ml-12 border-emerald-600 bg-emerald-400  rounded-full mt-7">Log In</button>
            </form>
        </div>
    </div>
  )
}
export default Login;