import React from 'react';
import AddButton from './AddButton';

function MenuItemCard({item}) {
  return (
    <div className="
        flex
        flex-row
        mx-4
        my-6
    ">
        {/*
        <div>
            {item.item_image_url == "" ? <></> : <img src={item.item_image_url} alt=""></img>}
        </div>
        */}
        
        <div>
            <h2 className="font-bold">{item.item_name}</h2>
            <h3 className="text-gray-600">${item.item_price}</h3>
            <p className="text-gray-500">{item.item_description}</p>
        </div>

        <AddButton />
    </div>
  )
}

export default MenuItemCard;
