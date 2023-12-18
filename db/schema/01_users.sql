-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;

-- Create Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- Create Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL
);

-- Create Lists table with foreign keys to Users and Categories
CREATE TABLE lists (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
);

-- Create Items table with foreign key to Lists
CREATE TABLE items (
    id SERIAL PRIMARY KEY NOT NULL,
    list_id INTEGER REFRENCE lists(id) ON DELETE CASCADE,
    item_name VARCHAR(100) NOT NULL,
    is_done BOOLEAN NOT NULL DEFAULT FALSE
);
-- https://www.postgresql.org/docs/current/datatype-json.html#JSON-KEYS-ELEMENTS

-- JSON
INSERT into categories (name, keywords) VALUES ('Movies / Series', ['Films', 'Productions']::json);
SELECT id FROM categories
  WHERE keywords @> '[{"term":"Films"}]';

CALL GOOGLE (What category is Deadpool) -> Films -> SELECT id FROM categories WHERE keywords ILIKE '%Films%' or name = 'Unknown'
-> Figure out if there's a `lists` entry for the user_id - YES? the we grab the list id. NO? then we insert that into `lists` table ; 
INSERT into item (item_id, item_name)