CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES 
('My First Note', 'A note about something'),
('My Second Note', 'A note about something else');






CREATE TABLE `poets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `death_date` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);




CREATE TABLE `nazams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `poet_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `poet_id` (`poet_id`),
  CONSTRAINT `nazams_ibfk_1` FOREIGN KEY (`poet_id`) REFERENCES `poets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE `ghazals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `poet_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `poet_id` (`poet_id`),
  CONSTRAINT `ghazals_ibfk_1` FOREIGN KEY (`poet_id`) REFERENCES `poets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO `ghazals` ( `content`, `poet_id`) 
VALUES ( 'aah ko chahiye ek umr asar hote tak\nkaun jiitaa hai terii zulf ke sar hote tak', 1);

CREATE TABLE `shers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `poet_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `poet_id` (`poet_id`),
  CONSTRAINT `shers_ibfk_1` FOREIGN KEY (`poet_id`) REFERENCES `poets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `catnazams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id` (`cat_id`),
  CONSTRAINT `catnazams_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE `catghazals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id` (`cat_id`),
  CONSTRAINT `catghazals_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE `catshers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id` (`cat_id`),
  CONSTRAINT `catshers_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);