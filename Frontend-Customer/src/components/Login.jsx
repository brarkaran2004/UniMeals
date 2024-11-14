import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SignUp from './SignUp';
function Login({isopen,onclose}) {
  const[signup,setsignup] = useState(false)

  const trig = ()=>{
    setsignup(!signup)
    
    
  }
  if (!isopen) return null;
  
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center"> */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form action="/submit-login" method="POST" className="space-y-4 bg-white p-6 rounded-lg px-12">
            <div className='flex justify-between'>
            <div className='text-gray-700 text-2xl'>Login</div>
            <div> <button onClick = {onclose}><CloseIcon className='text-black'/></button></div>
            </div>
            <div>
              <label htmlFor="email" className="text-gray-500 block">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-500 block">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-2 bg-red-600 text-white rounded"
            >
              Log In
            </button>

            <div className='py-6 border-t'>New to UniMeals?   <button onClick={trig} className=' text-blue-600'>Sign up</button> </div>
          </form>    
          <SignUp onclose={()=>{
            trig()
            onclose(false)
            
          }} isopen={signup}/>
        </div>
      {/* </div> */}
    </>
  );
}

export default Login;
