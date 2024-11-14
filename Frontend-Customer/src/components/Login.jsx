import React from 'react';

function Login() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-96 p-6 border-2 border-gray-400 rounded-lg">
          <form action="/submit-login" method="POST" className="space-y-4">
            <div className='text-gray-700 text-2xl'>Login</div>
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
          </form>    
          <div className='py-6'>New to UniMeals? SignUp</div>
        </div>
      </div>
    </>
  );
}

export default Login;
