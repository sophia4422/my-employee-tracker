DROP DATABASE IF EXISTS workplace_db;

CREATE DATABASE workplace_db;

USE workplace_db;

CREATE TABLE departments (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, department_name VARCHAR(50) NOT NULL);

CREATE TABLE roles (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, departments_id INT NOT NULL, title VARCHAR(50) NOT NULL, salary DECIMAL(8, 2) NOT NULL);
-- CONSTRAINT fk_departments FOREIGN KEY (departments_id), REFERENCES departments (id) ON DELETE CASCADE);


CREATE TABLE employees (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, role_id INT NOT NULL, manager_id INT);
    -- CONSTRAINT fk_employees FOREIGN KEY (manager_id),
    --     REFERENCES employees (id) ON DELETE SET NULL,
    -- CONSTRAINT fk_roles FOREIGN KEY (roles_id),
    --     REFERENCES role (id) ON DELETE CASCADE,