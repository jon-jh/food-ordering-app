const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

/*returns the status of a user*/
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
    //console.log(result.rows[0]);
    return result.rows[0];
  });
};
//getStatusByPhoneNumber("555-567-8901");
/*returns the status of a user*/
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
    //console.log(result.rows[0]);
    return result.rows[0];
  });
};
//getStatusByUserName("Isla Fisher");

const addUser = (user) => {
  const queryString = `
INSERT INTO users (name, phone_number)
VALUES ($1, $2)
RETURNING *;
  `;

  const queryParams = [user.name, user.phoneNumber];

  const result = db.query(queryString, queryParams);
  return result.rows[0];
};
//addUser({name: 'John Marston', phoneNumber: '777-245-2387'});

//get all the menu
const getMenu = () => {
  const queryString = `
  SELECT *
  FROM menu_items;
  `;
  const queryParams = [];
  return db.query(queryString).then((result) => {
    //console.log(result.rows);
    return result.rows;
  });
};
//getMenu();

module.exports = {
  getUsers,
  getStatusByPhoneNumber,
  getStatusByUserName,
  getMenu,
  addUser,
};
