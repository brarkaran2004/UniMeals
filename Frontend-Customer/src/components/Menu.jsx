import React from 'react';
import { useState, useRef, useEffect } from 'react';
import MenuItemCard from './MenuItemCard';
import {useParams} from 'react-router-dom';

function Menu({restaurant_info}) {

    const restaurants_info = {}
    const [menu, setMenu] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const categoryRefs = useRef({});
    const restaurantid = useParams();

    useEffect(() => {
        setMenu([
            {
              category_name: "Breakfast",
              items: [
                {
                  item_name: "Pancakes",
                  item_description: "Fluffy pancakes with maple syrup.",
                  item_price: 5.5,
                  item_image_url: "/images/pancakes.jpg"
                },
                {
                  item_name: "Waffles",
                  item_description: "Crispy waffles with whipped cream and berries.",
                  item_price: 6,
                  item_image_url: "/images/waffles.jpg"
                },
                {
                  item_name: "Omelette",
                  item_description: "Three-egg omelette with cheese and ham.",
                  item_price: 5,
                  item_image_url: "/images/omelette.jpg"
                },
                {
                  item_name: "Avocado Toast",
                  item_description: "Smashed avocado on whole-grain toast.",
                  item_price: 4,
                  item_image_url: "/images/avocado_toast.jpg"
                },
                {
                  item_name: "French Toast",
                  item_description: "Thick slices of french toast with powdered sugar.",
                  item_price: 5.5,
                  item_image_url: "/images/french_toast.jpg"
                },
                {
                  item_name: "Bagel with Cream Cheese",
                  item_description: "Toasted bagel with smooth cream cheese.",
                  item_price: 3,
                  item_image_url: "/images/bagel.jpg"
                },
                {
                  item_name: "Breakfast Burrito",
                  item_description: "Tortilla wrap with eggs, cheese, and bacon.",
                  item_price: 6.5,
                  item_image_url: "/images/breakfast_burrito.jpg"
                },
                {
                  item_name: "Smoothie Bowl",
                  item_description: "Mixed berry smoothie topped with granola.",
                  item_price: 7,
                  item_image_url: "/images/smoothie_bowl.jpg"
                },
                {
                  item_name: "Granola Parfait",
                  item_description: "Yogurt parfait with granola and fresh fruit.",
                  item_price: 4.5,
                  item_image_url: "/images/parfait.jpg"
                },
                {
                  item_name: "Egg Benedict",
                  item_description: "Poached eggs with hollandaise sauce on English muffin.",
                  item_price: 8,
                  item_image_url: "/images/egg_benedict.jpg"
                },
                {
                  item_name: "Croissant",
                  item_description: "Buttery and flaky croissant.",
                  item_price: 2.5,
                  item_image_url: "/images/croissant.jpg"
                },
                {
                  item_name: "Hash Browns",
                  item_description: "Crispy golden hash browns.",
                  item_price: 2,
                  item_image_url: "/images/hash_browns.jpg"
                },
                {
                  item_name: "Breakfast Sandwich",
                  item_description: "Egg, bacon, and cheese on a toasted roll.",
                  item_price: 4.5,
                  item_image_url: "/images/breakfast_sandwich.jpg"
                },
                {
                  item_name: "Cereal",
                  item_description: "Bowl of assorted cereals with milk.",
                  item_price: 3,
                  item_image_url: "/images/cereal.jpg"
                }
              ]
            },
            {
              category_name: "Drinks",
              items: [
                {
                  item_name: "Espresso",
                  item_description: "Strong and bold shot of espresso.",
                  item_price: 2.5,
                  item_image_url: "/images/espresso.jpg"
                },
                {
                  item_name: "Iced Coffee",
                  item_description: "Chilled coffee with ice.",
                  item_price: 3,
                  item_image_url: "/images/iced_coffee.jpg"
                }
              ]
            },
            {
              category_name: "Desserts",
              items: [
                {
                  item_name: "Brownie",
                  item_description: "Chocolate brownie with walnuts.",
                  item_price: 3.5,
                  item_image_url: "/images/brownie.jpg"
                },
                {
                  item_name: "Cheesecake",
                  item_description: "Creamy New York-style cheesecake.",
                  item_price: 5,
                  item_image_url: "/images/cheesecake.jpg"
                }
              ]
            },
            {
              category_name: "Salads",
              items: [
                {
                  item_name: "Caesar Salad",
                  item_description: "Crisp romaine lettuce with Caesar dressing.",
                  item_price: 6,
                  item_image_url: "/images/caesar_salad.jpg"
                },
                {
                  item_name: "Greek Salad",
                  item_description: "Mixed greens with feta, olives, and vinaigrette.",
                  item_price: 6.5,
                  item_image_url: "/images/greek_salad.jpg"
                }
              ]
            }
          ]);
    }, []);

    const handleCategoryClick = (category_name, e) => {
        setActiveCategory(category_name)
        if (categoryRefs.current[category_name]){
            categoryRefs.current[category_name].scrollIntoView({behavior:"smooth"});
        }
    }


  return (
    <div className="sm:w-8/12 min-h-screen sm:mx-auto flex flex-col">
       <div>
        <p>Restaurant ID : {restaurantid.restaurantid}</p>
       </div>

       <div className="w-full h-full flex flex-grow">
        <div className="hidden sm:block sm:mr-4 w-1/4">
            {
                menu.map((item) => (<button className={`
                        w-full
                        mx-4
                        block
                        text-lg
                        text-left
                        p-2
                        hover:bg-gray-100
                        ${activeCategory === item.category_name ? 'bg-gradient-to-r from-white to-red-200 text-red-600' : 'hover:bg-gray-100'}
                 `} onClick={(e) => handleCategoryClick(item.category_name, e)} 
                 >{item.category_name}</button>))
            }
        </div>

        <div className=" w-full sm:ml-4 sm:w-3/4 overflow-y-auto h-screen sm:border-l-2">
            <h1 className="m-4 text-3xl">Menu</h1>
            {
                menu.map((category) => (
                    <div key={category.category_name} ref={(element) => (categoryRefs.current[category.category_name] = element)} className="block">
                        <h2 className="text-2xl m-4 border-b-2 border-gray-100">{category.category_name}</h2>
                        {
                            category.items.map((item) => (
                                <MenuItemCard key={item.item_name} item={item}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
       </div>
    </div>
  )
}

export default Menu;
