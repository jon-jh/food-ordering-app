-- Users table seeds here (Example)
-- Insert data into users table
INSERT INTO users (name, phone_number) VALUES
('Alice Johnson', '123-456-7890'),
('Bob Smith', '098-765-4321');

INSERT INTO menu_items (name, price, description, image) VALUES
('Burger', 500, 'Delicious beef burger', 'burger.jpg'),
('Pizza', 800, 'Cheesy pepperoni pizza', 'pizza.jpg'),
('Salad', 300, 'Fresh garden salad', 'salad.jpg'),
('Pasta', 700, 'Creamy Alfredo pasta', 'pasta.jpg'),
('Sushi', 1200, 'Assorted sushi platter', 'sushi.jpg'),
('Steak', 1500, 'Grilled ribeye steak', 'steak.jpg'),
('Tacos', 600, 'Spicy chicken tacos', 'tacos.jpg'),
('Sandwich', 400, 'Ham and cheese sandwich', 'sandwich.jpg'),
('Soup', 250, 'Hot tomato soup', 'soup.jpg'),
('Ice Cream', 200, 'Vanilla ice cream', 'icecream.jpg'),
('Fries', 150, 'Crispy french fries', 'fries.jpg'),
('Coffee', 100, 'Freshly brewed coffee', 'coffee.jpg');

INSERT INTO order_items (menu_item_id, quantity) VALUES
(1, 2),
(2, 1),
(3, 3),
(4, 1),
(5, 2),
(6, 1),
(7, 3),
(8, 2),
(9, 1),
(10, 2),
(11, 3),
(12, 1);

INSERT INTO orders (user_id, order_item_id, order_date, status) VALUES
(1, 1, '2024-09-13', 'Completed'),
(2, 2, '2024-09-13', 'Pending');
