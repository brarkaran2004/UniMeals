import React from 'react';

function RestaurantCard({ name, address, timeFromUser, promotion }) {
  return (
    <div className="w-64 rounded-lg overflow-hidden shadow-lg bg-white p-4 m-4 hover:shadow-md hover:bg-gray-100">
      
      <h2 className="text-xl font-semibold text-gray-800">{name || 'Restaurant Name'}</h2>
 
      <p className="text-gray-600">{address || '123 Main St, City'}</p>

      <p className="text-gray-500 text-sm my-2">
        {timeFromUser ? `Approx. ${timeFromUser} mins away` : 'Distance not available'}
      </p>

      {promotion && (
        <div className="mt-2 bg-red-100 text-red-600 text-sm font-medium rounded p-2">
          {promotion}
        </div>
      )}
    </div>
  );
}

export default RestaurantCard;
