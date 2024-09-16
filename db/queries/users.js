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
 * Retrieves the status of a user by their name.
 * @param {string} userName - The name of the user.
 * @returns {Promise<Object>} A promise that resolves to an object containing the user's name, status, phone number, and order date.
 */
const getStatusByUserName = (userName) => {
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
      users.name = $1
    ORDER BY
      order_date desc;
  `;

  const queryParams = [userName];
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

  const queryParams = [user.name, user.phoneNumber];
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
  SELECT * 
  FROM orders;
  `
  return db.query(queryString).then ((result) => {
    return result.rows;
  })
};

const getOrdersByPhoneNumber = (phoneNumber) => {
  const queryString = `
  SELECT 
  users.name as userName ,
  users.phone_number as userPhoneNumber,
  orders.order_date as userOrderDate ,
  menu_items.name as userItemOrder,
  order_items.quantity * menu_items.price/100 as userPrice,
  order_items.quantity as userQuantity,
  orders.status as userStatus
from orders
join users on users.id = orders.user_id
join order_items on order_items.id = orders.order_item_id
join menu_items on menu_items.id = order_items.menu_item_id
where  users.phone_number = $1
group by 
userPhoneNumber, userName, userOrderDate, userItemOrder, userPrice, userQuantity,userStatus
order by 
userOrderDate desc
limit 10

  `
  
  return db.query(queryString, [phoneNumber]).then((result) => {
    console.log(result.rows);
    return result.rows;
  })
  .catch((err) => {console.log(err)})
}

getOrdersByPhoneNumber('555-808-0809');
module.exports = {
  getUsers,
  getStatusByPhoneNumber,
  getStatusByUserName,
  getMenu,
  addUser,
  getOrders,
  getOrdersByPhoneNumber
};