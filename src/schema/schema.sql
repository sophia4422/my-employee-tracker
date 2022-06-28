DROP DATABASE IF EXISTS workplace_db;

CREATE DATABASE workplace_db;

USE workplace_db;


CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL,
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(8, 2) NOT NULL,
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(5, 2) NOT NULL,
    manager VARCHAR(50) NOT NULL,
);