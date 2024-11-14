import React from 'react';

function Menu() {
  return (
    <div className="sm:w-8/12 min-h-screen sm:mx-auto flex flex-col">
       <div>
        <p>Top part where the restaurant information goes</p>
       </div>

       <div>
        <div>
            <p>Left Sidebar Which shows the categories</p>
        </div>

        <div>
            <p>Right part where the menu items go</p>
        </div>
       </div>
    </div>
  )
}

export default Menu;
