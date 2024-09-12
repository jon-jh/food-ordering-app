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
- username
- password
- name
- address
- phone_number
- signup_date

Orders
- id 
- user_id
- restaurant_id
- order_date
- total_price
- status

Order_Items
- id
- order_id
- menu_item_id
- quantity

Payment
- id
- order_id
- payment_date
- payment_status

Review
- id
- user_id
- restaurant_id
- rating
- comment
- review_date

Restaurants
- id
- name
- address
- user_id

Menu_Items
- id
- restaurant_id
- name
- price
- description

![alt text](food-ordering-app.png)

---

### Routes


---


---

### Wireframes

---