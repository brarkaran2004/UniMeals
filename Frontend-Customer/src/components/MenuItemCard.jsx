import React from 'react';
//import cartState from '../state/atoms/cart_state';

function MenuItemCard({item}) {

  //Use this to add items when clicking the add button
  //const [cart, setCart] = useRecoilState(cartState);

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

        <div className='ml-auto p-10'>
          <button className='bg-red-600 text-white text-lg'>Add</button>
        </div>
    </div>
  )
}

export default MenuItemCard;
