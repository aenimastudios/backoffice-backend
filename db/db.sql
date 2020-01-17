 create database aenima_db;

CREATE TABLE inoperation (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    terminalId INT NOT NULL,
    date DATETIME NOT NULL,
    value FLOAT NOT NULL
); 

CREATE TABLE outoperation (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    terminalId INT NOT NULL,
    issueDate DATETIME NOT NULL,
    expDate DATETIME NOT NULL,
    value FLOAT NOT NULL
);

CREATE TABLE cash (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    terminalId INT NOT NULL,
    date DATETIME NOT NULL,
    value FLOAT NOT NULL,
    type INT NOT NULL
);