-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS menu_items CASCADE;

DROP TABLE IF EXISTS order_items CASCADE;

DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(25) NOT NULL
  );

CREATE TABLE
  menu_items (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL DEFAULT 0,
    description TEXT,
    image VARCHAR(255) NOT NULL
  );

CREATE TABLE
  order_items (
    id SERIAL PRIMARY KEY NOT NULL,
    menu_item_id INTEGER REFERENCES menu_items (id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 0
  );

CREATE TABLE
  orders (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    order_item_id INTEGER REFERENCES order_items(id) ON DELETE CASCADE,
    order_date DATE NOT NULL,
    status VARCHAR(10) NOT NULL
  );
