import React from 'react';
import {Link} from 'react-router-dom';

function RestaurantCard({ id, name, address, timeFromUser, promotion }) {
  return (
    <Link className="flex flex-col w-72 max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-6 m-4 hover:shadow-2xl hover:bg-gray-50 transition-all duration-300" to={`/menu/${id}`}>
      
      {/* Restaurant Name */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name || 'Restaurant Name'}</h2>

      {/* Restaurant Address */}
      <p className="text-gray-600 text-sm mb-4">{address || '123 Main St, City'}</p>

      {/* Estimated Time */}
      <p className="text-gray-500 text-sm mb-4">
        {timeFromUser ? `Approx. ${timeFromUser} mins away` : 'Distance not available'}
      </p>

      {/* Promotion */}
      {promotion && (
        <div className="mt-4 p-3 m-1 bg-green-100 text-green-600 text-sm font-medium rounded-md shadow-sm border-l-4 border-green-500">
          {promotion}
        </div>
      )}

      {/* Button or CTA (optional) */}
      <div className="mt-auto">
        <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          View Menu
        </button>
      </div>
    </Link>
  );
}

export default RestaurantCard;