import React from 'react';
import AddCard from '@mui/icons-material/AddCard';

function Wallet() {

    const balance = 354.95;
    
  return (
    <div>
      <div className="w-full sm:w-8/12 mx-auto h-screen pt-10">
      <h1 className="text-white text-2xl pb-10 border-b-2 border-gray-100">Wallet</h1>
        <div className="bg-black flex flex-col text-white py-5 px-5 sm:px-20 pb-10 border-b-2 border-gray-100">
            <h2 className="my-6 text-lg">Balance</h2>
            <h1 className="text-gray-100 text-2xl">${balance}</h1>
            <button className="text-white bg-red-600 p-2 max-w-40 rounded-lg mt-10">Cash out</button>
        </div>
        <h1 className="text-white text-2xl pb-10 border-b-2 border-gray-100 mt-20">Payout Methods</h1>

        <button className="text-white p2 my-6"><AddCard className="text-white text-xl"/> Add a payout method</button>
      </div>
    </div>
  )
}

export default Wallet;
