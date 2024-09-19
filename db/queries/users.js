/**
 * @fileoverview This file contains functions to interact with the users and orders data in the database.
 */

const db = require("../connection");

/**
 * Retrieves all users from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of user objects.
 */
const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

/**
 * Retrieves the status of a user by their phone number.
 * @param {string} phoneNumber - The phone number of the user.
 * @returns {Promise<Object>} A promise that resolves to an object containing the user's name, status, phone number, and order date.
 */
const getStatusByPhoneNumber = (phoneNumber) => {
  const queryString = `
    SELECT
      users.name as userName,
      orders.status as userStatus,
      users.phone_number as userPhoneNumber,
      order_date as userOrderDate
    FROM
      orders
      JOIN users ON users.id = user_id
    WHERE
      users.phone_number = $1
    ORDER BY
      order_date desc;
  `;

  const queryParams = [phoneNumber];
  return db.query(queryString, queryParams).then((result) => {
    return result.rows[0];
  });
};

/**
 * Adds a new user to the database.
 * @param {Object} user - The user object containing name and phone number.
 * @param {string} user.name - The name of the user.
 * @param {string} user.phoneNumber - The phone number of the user.
 * @returns {Promise<Object>} A promise that resolves to the newly added user object.
 */
const addUser = (user) => {
  const queryString = `
    INSERT INTO users (name, phone_number)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const queryParams = [null || user.name, user.phoneNumber];
  return db.query(queryString, queryParams).then((result) => {
    return result.rows[0];
  });
};

/**
 * Retrieves all menu items from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of menu item objects.
 */
const getMenu = () => {
  const queryString = `
    SELECT *
    FROM menu_items;
  `;
  return db.query(queryString).then((result) => {
    return result.rows;
  });
};

const getOrders = () => {
  const queryString = `
  SELECT
  *,
  order_items.quantity * menu_items.price as total_price
  FROM orders
  join users on users.id = orders.user_id
join order_items on order_items.order_id = orders.id
join menu_items on menu_items.id = order_items.menu_item_id
  ORDER BY
  orders.order_date desc
  `;
  return db.query(queryString).then((result) => {
    return result.rows;
  });
};

const getOrdersByPhoneNumber = (phoneNumber) => {
  const queryString = `
  SELECT 
  users.name as userName ,
  users.phone_number as userPhoneNumber,
  orders.order_date as userOrderDate ,
  menu_items.name as userItemOrder,
  menu_items.id as userMenuID,
  order_items.quantity * menu_items.price as userPrice,
  order_items.quantity as userQuantity,
  orders.status as userStatus
from orders
join users on users.id = orders.user_id
join order_items on order_items.order_id = orders.id
join menu_items on menu_items.id = order_items.menu_item_id

where  users.phone_number = $1
group by 
userPhoneNumber, userName, userOrderDate, userMenuId,userItemOrder, userPrice, userQuantity,userStatus
order by 
userOrderDate desc
limit 10

  `;

  return db
    .query(queryString, [phoneNumber])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getIdByPhoneNumber = (phoneNumber) => {
  const queryString = `
  SELECT 
  users.id as userId
  from orders
  join users on users.id = orders.user_id
  join menu_items on menu_items.id = orders.menu_item_id
  where users.phone_number = $1 
  `;
  return db
    .query(queryString, [phoneNumber])
    .then((result) => {
      //console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

//receives an object of orders [{menu_item_name, quantity},..]
const addOrder = (phoneNumber, orders) => {
  const queryString = `
  -- First, select the user_id based on the phone number
  WITH user_data AS (
    SELECT id AS user_id
    FROM users
    WHERE phone_number = $1
  )
  -- Then, insert into the orders table using the selected user_id
  INSERT INTO orders(user_id, order_date, status)
  VALUES ((SELECT user_id FROM user_data), NOW(), 'pending')
  RETURNING id AS order_id
  `;

  const queryParams = [phoneNumber];

  return db
    .query(queryString, queryParams)
    .then((result) => {
      const orderId = result.rows[0].order_id;
      let orderItemsQuery = `INSERT INTO order_items (menu_item_id, order_id, quantity) VALUES `;
      let queryParams = [];
      let values = [];

      // Create an array of promises for fetching menu_item_ids based on menu_name
      const menuItemPromises = orders.map((order) => {
        const { name, quantity } = order; // Use menu_name here
        return db.query('SELECT id FROM menu_items WHERE name = $1', [name])
          .then((res) => {
            if (res.rows.length === 0) {
              throw new Error(`Menu item '${name}' not found`);
            }
            const menu_item_id = res.rows[0].id;
            return { menu_item_id, quantity };
          });
      });

      return Promise.all(menuItemPromises)
        .then((resolvedOrders) => {
          resolvedOrders.forEach((order, index) => {
            const baseIndex = index * 3 + 1;
            values.push(`($${baseIndex}, $${baseIndex + 1}, $${baseIndex + 2})`);
            queryParams.push(order.menu_item_id, orderId, order.quantity);
          });

          orderItemsQuery += values.join(", ") + " RETURNING *;";

          return db.query(orderItemsQuery, queryParams);
        });
    })
    .then((result) => {
      console.log(result.rows);
      return result.rows; // Return the inserted order items
    })
    .catch((err) => {
      console.error(err.message); // Log any errors
    });
};

const getUserByPhoneNumber = (phoneNumber) => {
  const queryString = `
  SELECT 
  users.name as username,
  users.phone_number as userphonenumber,
  users.id as userid
  FROM users
  WHERE users.phone_number = $1

  `;
  const queryParams = [phoneNumber];
  return db
    .query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};




// Example usage
// addOrder("555-789-0123", [
//   { menu_item_id: 10, quantity: 2 },
//   { menu_item_id: 5, quantity: 1 },
//   { menu_item_id: 6, quantity: 1 },
//   { menu_item_id: 9, quantity: 1 }
// ]);

//addOrderItem({item_id: 10,quantity:10});
//getIdByPhoneNumber('555-808-0809')
//getOrdersByPhoneNumber('555-789-0123');
//addUser({phoneNumber: '123-456-7890'});
//getUserByPhoneNumber("555-789-0123");
module.exports = {
  getUsers,
  getStatusByPhoneNumber,
  getMenu,
  addUser,
  getOrders,
  getOrdersByPhoneNumber,
  getIdByPhoneNumber,
  addOrder,
  getUserByPhoneNumber,
  
};
