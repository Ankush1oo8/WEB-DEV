-- Active: 1720711475055@@127.0.0.1@3306@college

CREATE DATABASE if not EXISTS instagram;

use instagram;

CREATE TABLE user(
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    follower INT DEFAULT 0,
    following INT 
);
CREATE TABLE posts(
    id INT,
    content VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id)REFERENCES user(id)
);

INSERT INTO user
    (id,name,email,follower,following)
    VALUES
    (1,"Hulk","hulkavenger@gmail.com",23,45),
    (2,"Iron Man","ironheart@gmail.com",3000,3000);

SELECT * FROM user