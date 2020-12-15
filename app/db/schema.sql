
DROP DATABASE IF EXISTS `italiaRecipes`;
CREATE DATABASE italiaRecipes;
USE italiaRecipes;

CREATE TABLE `recipes` (
  id int NOT NULL AUTO_INCREMENT,
	type varchar(255) NOT NULL,
	name TEXT NOT NULL,
	PRIMARY KEY (id)

);

