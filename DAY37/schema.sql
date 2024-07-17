CREATE TABLE USER(
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

drop table USER;

CREATE TABLE user(
    id VARCHAR(225) PRIMARY KEY,
    username VARCHAR(225) UNIQUE,
    email VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL
);

select password from user where username="Coleman.Kemmer";