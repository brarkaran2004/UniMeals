import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function SignUp({isopen,onclose}) {
    if(!isopen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50 flex h-screen">
    <form className="flex flex-col border-2 border-gray-400 rounded-lg p-4 bg-white">
        <div className='flex justify-between'>
        <div className="text-gray text-2xl">Create Account</div>
        <div><button onClick={onclose}><CloseIcon className='text-black'/></button></div>
        </div>
        <div className=" flex flex-col md:flex-row">
            <div className="flex flex-col m-4">
                <label for="first_name">First Name</label>
                <input className="text-lg bg-gray-100 rounded-md focus:border-2 focus:border-red-400 focus:outline-none" id="first_name" type="text" required />
            </div> 
            <div className="flex flex-col m-4">
                <label for="last_name">Last Name</label>
                <input className="text-lg bg-gray-100 rounded-md focus:border-2 focus:border-red-400 focus:outline-none" id="last_name" type="text" required />
            </div>
        </div>

        <div className="flex flex-col m-4">
            <label for="email">Email</label>
            <input className="text-lg bg-gray-100 rounded-md focus:border-2 focus:border-red-400 focus:outline-none" id="email" type="email" required/>
        </div>

        <div className=" flex flex-col md:flex-row">
            <div className="flex flex-col m-4 md:w-4/12">
                <label for="country_code">Country</label>
                <select className="text-lg bg-gray-100 rounded-md focus:border-2 focus:border-red-400 focus:outline-none" id="country_code" type="text" required > 
                    <option className="bg-gray-100 focus:border-2 focus:border-red-400">{"Canada (+1)"}</option>
                    <option className="bg-gray-100 focus:border-2 focus:border-red-400">{"US (+1)"}</option>
                </select>
            </div> 
            <div className="flex flex-col m-4 md:w-8/12">
                <label for="phone_number">Phone Number</label>
                <input className="text-lg bg-gray-100 rounded-md focus:border-2 focus:border-red-400 focus:outline-none" id="phone_number" type="text" required />
            </div>
        </div>

        <div className="flex flex-col m-4">
            <label for="password">Password</label>
            <input  className="text-lg bg-gray-100 rounded-md focus:border-2 focus:border-red-400 focus:outline-none"id="password" type="password" required/>
        </div>

        <button className="bg-red-600 text-2xl text-white m-4 rounded" type="submit">Create Account</button>
    </form>
    </div>
  )
}

export default SignUp
