import React from 'react'
import RestaurantCard from './RestrauntCard'

function Homepage() {
    const res = [
        {
          "name": "UniMeals Grill",
          "address": "123 Food Street, New York",
          "timeFromUser": 15,
          "promotion": "Get 20% off on your first order!"
        },
        {
          "name": "Pasta Palace",
          "address": "456 Italian Ave, New York",
          "timeFromUser": 10,
          "promotion": "Free dessert with every meal!"
        },
        {
          "name": "Burger Haven",
          "address": "789 Burger Blvd, Los Angeles",
          "timeFromUser": 20,
          "promotion": "Buy 1 Get 1 Free on select items"
        },
        {
          "name": "Sushi Central",
          "address": "101 Sushi Lane, San Francisco",
          "timeFromUser": 25,
          "promotion": null
        },
        {
          "name": "Green Bowl",
          "address": "202 Vegan Way, Austin",
          "timeFromUser": 8,
          "promotion": "10% off for students"
        },
        {
          "name": "Taco Town",
          "address": "303 Fiesta Rd, San Diego",
          "timeFromUser": 5,
          "promotion": "Half-price tacos every Tuesday!"
        },
        {
          "name": "Spicy Kitchen",
          "address": "150 Chili St, Miami",
          "timeFromUser": 18,
          "promotion": "Free drink with spicy dishes"
        },
        {
          "name": "Pizza World",
          "address": "710 Slice Ave, Chicago",
          "timeFromUser": 12,
          "promotion": "15% off on large pizzas"
        },
        {
          "name": "BBQ Barn",
          "address": "505 Grill Road, Houston",
          "timeFromUser": 22,
          "promotion": "Family deals available"
        },
        {
          "name": "Smoothie Spot",
          "address": "412 Blend Blvd, Phoenix",
          "timeFromUser": 7,
          "promotion": "Two-for-one smoothies"
        },
        {
          "name": "Vegan Valley",
          "address": "900 Plant Dr, Seattle",
          "timeFromUser": 13,
          "promotion": "20% off vegan options"
        },
        {
          "name": "Seafood Central",
          "address": "621 Ocean Ave, Miami",
          "timeFromUser": 16,
          "promotion": "Get $5 off any seafood platter"
        },
        {
          "name": "Grill & Chill",
          "address": "300 BBQ Lane, Dallas",
          "timeFromUser": 19,
          "promotion": "Free appetizers with main course"
        },
        {
          "name": "Dessert Den",
          "address": "99 Sweet St, Boston",
          "timeFromUser": 11,
          "promotion": "Buy one, get one free dessert"
        },
        {
          "name": "Tandoori Twist",
          "address": "888 Curry Blvd, Atlanta",
          "timeFromUser": 14,
          "promotion": null
        },
        {
          "name": "Sizzle Steakhouse",
          "address": "303 Beef Rd, Nashville",
          "timeFromUser": 18,
          "promotion": "10% off all steaks"
        },
        {
          "name": "Noodle Nirvana",
          "address": "124 Ramen Rd, Denver",
          "timeFromUser": 9,
          "promotion": "Free toppings on noodle bowls"
        },
        {
          "name": "Wrap World",
          "address": "222 Tortilla St, Portland",
          "timeFromUser": 6,
          "promotion": "20% off wraps during lunch hours"
        },
        {
          "name": "Soup Stop",
          "address": "444 Broth Blvd, Seattle",
          "timeFromUser": 10,
          "promotion": "Student discounts available"
        },
        {
          "name": "Pizza Planet",
          "address": "66 Dough Ave, Orlando",
          "timeFromUser": 14,
          "promotion": "Buy 2 get 1 free pizza"
        },
        {
          "name": "Burger Bliss",
          "address": "313 Buns Rd, Dallas",
          "timeFromUser": 12,
          "promotion": "Kids eat free on Sundays"
        },
        {
          "name": "Sushi Saga",
          "address": "909 Fish Ln, New York",
          "timeFromUser": 17,
          "promotion": null
        },
        {
          "name": "The Salad Station",
          "address": "302 Green St, Boston",
          "timeFromUser": 5,
          "promotion": "50% off for members"
        },
        {
          "name": "Chicken Coop",
          "address": "111 Cluck Ave, Phoenix",
          "timeFromUser": 20,
          "promotion": "Free fries with every order"
        },
        {
          "name": "Thai Treats",
          "address": "404 Spice Rd, San Francisco",
          "timeFromUser": 21,
          "promotion": "20% off Thai classics"
        },
        {
          "name": "Cafe Delight",
          "address": "33 Brew St, Chicago",
          "timeFromUser": 7,
          "promotion": "Free muffin with coffee"
        },
        {
          "name": "Taco Toppers",
          "address": "121 Fiesta Dr, Austin",
          "timeFromUser": 8,
          "promotion": "Free topping on all tacos"
        },
        {
          "name": "Pasta Place",
          "address": "200 Noodle Lane, Denver",
          "timeFromUser": 13,
          "promotion": "Free garlic bread with pasta"
        },
        {
          "name": "BBQ Boss",
          "address": "520 Smoke St, Houston",
          "timeFromUser": 17,
          "promotion": "50% off on weekends"
        },
        {
          "name": "Kebab Kingdom",
          "address": "87 Grill Ave, Las Vegas",
          "timeFromUser": 19,
          "promotion": null
        },
        {
          "name": "Breakfast Bonanza",
          "address": "607 Morning Dr, Seattle",
          "timeFromUser": 15,
          "promotion": "10% off breakfast items"
        }
      ];
      
  return (
    <>
    <div className='sm:w-8/12 sm:mx-auto flex flex-wrap justify-center'>
    {res.map((res)=>(
      <RestaurantCard name ={res.name} address={res.address}
      timeFromUser={res.timeFromUser}
      promotion={res.promotion}
    />
    ))}
    </div>
    </>
  )
}

export default Homepage
