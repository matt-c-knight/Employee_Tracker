DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NULL,
 PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary Decimal(10,4) NULL,
  department_id INT,
  PRIMARY KEY (id),
  CONSTRAINT FK_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


-- W3 Schools 
-- CREATE TABLE Orders (
--     OrderID int NOT NULL,
--     OrderNumber int NOT NULL,
--     PersonID int,
--     PRIMARY KEY (OrderID),
--     CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
--     REFERENCES Persons(PersonID)
-- );