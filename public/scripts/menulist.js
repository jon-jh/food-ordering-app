const menus  = [
  {
  id: 1,
  name: "Pancakes",
  price: 550,
  description: "Fluffy pancakes with syrup",
  image: "pancakes.jpg"
  },
  {
  id: 2,
  name: "Waffles",
  price: 600,
  description: "Belgian waffles with strawberries",
  image: "waffles.jpg"
  },
  {
  id: 3,
  name: "Omelette",
  price: 400,
  description: "Cheese omelette with herbs",
  image: "omelette.jpg"
  },
  {
  id: 4,
  name: "Salad",
  price: 300,
  description: "Fresh garden salad with vinaigrette",
  image: "salad.jpg"
  },
  {
  id: 5,
  name: "Caesar Salad",
  price: 500,
  description: "Caesar salad with croutons",
  image: "caesar_salad.jpg"
  },
  {
  id: 6,
  name: "Soup",
  price: 350,
  description: "Chicken noodle soup",
  image: "soup.jpg"
  },
  {
  id: 7,
  name: "Mozzarella Sticks",
  price: 450,
  description: "Fried mozzarella sticks",
  image: "mozzarella_sticks.jpg"
  },
  {
  id: 8,
  name: "French Fries",
  price: 250,
  description: "Crispy french fries",
  image: "french_fries.jpg"
  },
  {
  id: 9,
  name: "Grilled Cheese",
  price: 400,
  description: "Grilled cheese sandwich",
  image: "grilled_cheese.jpg"
  },
  {
  id: 10,
  name: "Burger",
  price: 500,
  description: "Juicy grilled burger with cheese",
  image: "burger.jpg"
  },
  {
  id: 11,
  name: "Sandwich",
  price: 600,
  description: "Turkey sandwich with lettuce and tomato",
  image: "sandwich.jpg"
  },
  {
  id: 12,
  name: "Burrito",
  price: 750,
  description: "Beef burrito with beans and rice",
  image: "burrito.jpg"
  },
  {
  id: 13,
  name: "Taco",
  price: 400,
  description: "Beef taco with salsa",
  image: "taco.jpg"
  },
  {
  id: 14,
  name: "Nachos",
  price: 600,
  description: "Loaded nachos with cheese and jalapenos",
  image: "nachos.jpg"
  },
  {
  id: 15,
  name: "Pizza",
  price: 800,
  description: "Pepperoni pizza with extra cheese",
  image: "pizza.jpg"
  },
  {
  id: 16,
  name: "Pasta",
  price: 700,
  description: "Spaghetti with marinara sauce",
  image: "pasta.jpg"
  },
  {
  id: 17,
  name: "Lasagna",
  price: 1000,
  description: "Cheesy lasagna with meat sauce",
  image: "lasagna.jpg"
  },
  {
  id: 18,
  name: "Chicken Wings",
  price: 700,
  description: "Spicy chicken wings",
  image: "chicken_wings.jpg"
  },
  {
  id: 19,
  name: "Fried Chicken",
  price: 900,
  description: "Crispy fried chicken",
  image: "fried_chicken.jpg"
  },
  {
  id: 20,
  name: "BBQ Ribs",
  price: 1300,
  description: "BBQ ribs with coleslaw",
  image: "bbq_ribs.jpg"
  },
  {
  id: 21,
  name: "Fish and Chips",
  price: 800,
  description: "Fish and chips with tartar sauce",
  image: "fish_and_chips.jpg"
  },
  {
  id: 22,
  name: "Steak",
  price: 1500,
  description: "Grilled steak with mashed potatoes",
  image: "steak.jpg"
  },
  {
  id: 23,
  name: "Sushi",
  price: 1200,
  description: "Assorted sushi platter",
  image: "sushi.jpg"
  },
  {
  id: 24,
  name: "Ice Cream",
  price: 200,
  description: "Vanilla ice cream with chocolate syrup",
  image: "icecream.jpg"
  },
  {
  id: 25,
  name: "Milkshake",
  price: 300,
  description: "Chocolate milkshake",
  image: "milkshake.jpg"
  },
  {
  id: 26,
  name: "Smoothie",
  price: 350,
  description: "Berry smoothie",
  image: "smoothie.jpg"
  },
  {
  id: 27,
  name: "BBQ Ribs",
  price: 1300,
  description: "BBQ ribs with coleslaw",
  image: "bbq_ribs.jpg"
  },
  {
  id: 28,
  name: "Fish and Chips",
  price: 800,
  description: "Fish and chips with tartar sauce",
  image: "fish_and_chips.jpg"
  },
  {
  id: 29,
  name: "Lasagna",
  price: 1000,
  description: "Cheesy lasagna with meat sauce",
  image: "lasagna.jpg"
  },
  {
  id: 30,
  name: "Grilled Cheese",
  price: 400,
  description: "Grilled cheese sandwich",
  image: "grilled_cheese.jpg"
  },
  {
  id: 31,
  name: "Chicken Wings",
  price: 700,
  description: "Spicy chicken wings",
  image: "chicken_wings.jpg"
  },
  {
  id: 32,
  name: "Mozzarella Sticks",
  price: 450,
  description: "Fried mozzarella sticks",
  image: "mozzarella_sticks.jpg"
  },
  {
  id: 33,
  name: "Nachos",
  price: 600,
  description: "Loaded nachos with cheese and jalapenos",
  image: "nachos.jpg"
  },
  {
  id: 34,
  name: "Burrito",
  price: 750,
  description: "Beef burrito with beans and rice",
  image: "burrito.jpg"
  },
  {
  id: 35,
  name: "Cheesecake",
  price: 550,
  description: "New York cheesecake",
  image: "cheesecake.jpg"
  },
  {
  id: 36,
  name: "Pudding",
  price: 200,
  description: "Vanilla pudding",
  image: "pudding.jpg"
  }
  ]
  

  const getId  = function(name){
    menus.array.forEach(element => {
      if (element.name === name){
        return element.id;
      }
    });
  }

  module.exports = {
    menus,
    getId
  }