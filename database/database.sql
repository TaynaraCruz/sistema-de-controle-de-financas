CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `income` decimal NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `LiveIn` (
  `user_id` int,
  `house_id` int,
  PRIMARY KEY(`user_id`,`house_id`)
);

CREATE TABLE `House` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `admin_id` int NOT NULL
);

CREATE TABLE `Expense` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `value` decimal NOT NULL,
  `house_id` int NOT NULL
);

CREATE TABLE `Payment` (
  `user_id` int,
  `house_id` int,
  `date` date NOT NULL,
  `value` decimal NOT NULL,
  PRIMARY KEY(`user_id`,`house_id`)
);

ALTER TABLE `LiveIn` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `LiveIn` ADD FOREIGN KEY (`house_id`) REFERENCES `House` (`id`);

ALTER TABLE `House` ADD FOREIGN KEY (`admin_id`) REFERENCES `User` (`id`);

ALTER TABLE `Expense` ADD FOREIGN KEY (`house_id`) REFERENCES `House` (`id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`house_id`) REFERENCES `House` (`id`);
