-- Users table seeds here (Example)
-- Insert data into users table
INSERT INTO users (name, phone_number) VALUES
('Charlie Brown', '555-345-6789'),
('Eve Adams', '555-567-8901');

-- Insert data into menu_items table
INSERT INTO menu_items (name, price, description, image) VALUES
('Waffles', 600, 'Belgian waffles with strawberries', 'waffles.jpg'),
('Omelette', 400, 'Cheese omelette with herbs', 'omelette.jpg'),
('Caesar Salad', 500, 'Caesar salad with croutons', 'caesar_salad.jpg'),
('Soup', 350, 'Chicken noodle soup', 'soup.jpg'),
('French Fries', 250, 'Crispy french fries', 'fries.jpg'),
('Grilled Cheese', 400, 'Grilled cheese sandwich', 'grilled_cheese.jpg');

-- Insert data into orders table
INSERT INTO orders (user_id, order_date, status) VALUES
(1, '2023-02-15', 'complete'),
(2, '2023-01-10', 'in-progress');

-- Insert data into order_items table
INSERT INTO order_items (menu_item_id, order_id, quantity) VALUES
(1, 1, 1),
(3, 2, 1);
