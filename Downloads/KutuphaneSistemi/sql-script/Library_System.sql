DROP DATABASE  IF EXISTS `Library_System`;

CREATE DATABASE  IF NOT EXISTS `Library_System`;
USE `Library_System`;


DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` char(80) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  primary key(`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `user` (username,password,first_name,last_name,email)
VALUES('necmettinyigit','$2a$04$eFytJDGtjbThXa80FyOOBuFdK2IwjyWefYkMpiBEFlpBwDH.5PM0K','NecmettinYigit','Dubek','yigitdubekk@gmail.com'),
('baris','$2a$04$eFytJDGtjbThXa80FyOOBuFdK2IwjyWefYkMpiBEFlpBwDH.5PM0K','Baris','Dubek','barisdubekk@gmail.com');

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book`(
`book_id` int(11) NOT NULL AUTO_INCREMENT,
`book_name`  varchar(50) NOT NULL,
`book_author`varchar(50) NOT NULL,
`user_id`  int(11) DEFAULT NULL,
`start_date` date DEFAULT NULL,
`end_date`	date  DEFAULT NULL,
PRIMARY KEY  (`book_id`),
UNIQUE KEY `BOOK_UNIQUE` (`book_id`),

KEY `FK_USER_idx` (`user_id`),
CONSTRAINT`FK_USER`
FOREIGN KEY(`user_id`)
REFERENCES `user` (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `book` (book_name,book_author,user_id,start_date,end_date)
VALUES ('Das Kapital','Karl Marx',null,null,null);

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `role` (name)
VALUES 
('ROLE_USER'),('ROLE_ADMIN');


CREATE TABLE `users_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  
  PRIMARY KEY (`user_id`,`role_id`),
  
  KEY `FK_ROLE_idx` (`role_id`),
  
  CONSTRAINT `FK_USER_05` FOREIGN KEY (`user_id`) 
  REFERENCES `user` (`id`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION,
  
  CONSTRAINT `FK_ROLE` FOREIGN KEY (`role_id`) 
  REFERENCES `role` (`id`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;


INSERT INTO `users_roles` (user_id,role_id)
VALUES 
(1, 1),
(2,1),
(2,2);












