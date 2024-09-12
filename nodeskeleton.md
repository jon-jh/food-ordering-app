### User Stories

---
- A user should be able to log into their account
- If the user has no account they should be able to signup for an account.
- The users password must be hashed.
- The user is presented with restaurants in their city as soon as they login.
- The user can search for restaurants or restuarants that have a certain item.
- The user will be able to order as many items as the restaurant limits the item orders.
- The user can abort the order process before checkout.
- When the user checkout the order the order is locked and the estimated time of arrival is shown.



---

### ERD

---
Users 
- id
- phone_number (will be used as the customer identification and for sms notification)
- name

Orders (all the orders made by the user)
- id 
- user_id
- order_date
- status

Order_Items (a combination of the menu_items selected by the user after clicking check out)
- id
- order_id
- menu_item_id
- quantity

Menu_Items (all the items that make up the menu)
- id
- name
- price
- description

![alt text](food-ordering-app.png)

---

### Routes

> #### POST
- /login (handles login)
- /user (handles user account info)
- /order (handles data from the order page)
- /restaurant/:user_id (specifically for the restaurant owner)
- /logout
- /register (can register user)
- /franchise (handles the restaurant registration)



> #### GET
- /login (the login page)
- /order (order page to handle the order)
- /profile  (Shows the users analytics:- order history and user account information)
- /restaurant (shows the information for the restaurant)
- /restaurant/reviews (shows the review for the restaurant)
- /order/:order_id (shows the order status)
- /register (registration page)
- /franchise (franchise registration page)

---

---

### Wireframes

---

### Development kits
- Javascript (expressjs, jquery, )
- HTML
- CSS (SCSS)
- Database (postgres)
