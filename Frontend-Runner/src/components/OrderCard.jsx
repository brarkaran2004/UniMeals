import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function OrderCard() {
    const[action,setaction] = useState(true);

    const trigger = ()=>{
        setaction(!action)
    }
    const res = 
        {
          restaurantName: "Pasta Palace",
          orderPrice: 24.99,
          time: 4.2,
          deliverTo: "106A st NW"
        }
    if(!action) return null;
  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black text-white rounded-2xl p-6 w-80 shadow-lg">
        
        
        <div className="flex justify-center relative mb-4">
        <div className="bg-red-600 rounded-full px-4 py-1 text-sm font-semibold flex items-center">
            <span role="img" aria-label="delivery">🍽️</span> Delivery
        </div>
        <button onClick={trigger} className="absolute top-0 right-0">
            <CloseIcon />
        </button>
        </div>
        
       
        <div className="text-center">
          <h2 className="text-3xl font-bold">{res.orderPrice}</h2>
          <p className="text-gray-400 text-sm">includes expected tip</p>
        </div>
        
      
        <div className="border-t border-gray-700 my-4"></div>
        
       
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center">
            <span role="img" aria-label="clock" className="mr-2">⏰</span>
            <p>{res.time} mins total</p>
          </div>
        </div>
        
        
        <div className="text-sm">
          <div className="flex items-center mb-1">
            <span role="img" aria-label="location" className="mr-2">📍</span>
            <p>7-Eleven (1090 N Ogden St)</p>
          </div>
          <div className="flex items-center">
            <span role="img" aria-label="location" className="mr-2">🗺️</span>
            <p>{res.deliverTo}</p>
          </div>
        </div>
        
        
        <button 
        className="mt-4 flex  w-64 justify-center items-center bg-red-600 h-10 rounded-lg"
        onClick={trigger}
        >
        Accept Order
        </button>
        
      </div>
    </div>
  )
}

export default OrderCard;
