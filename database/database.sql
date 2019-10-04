CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `income` decimal NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `LiveIn` (
  `user_id` int PRIMARY KEY,
  `house_id` int PRIMARY KEY
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
  `user_id` int PRIMARY KEY,
  `house_id` int PRIMARY KEY,
  `date` date NOT NULL,
  `value` dacimal NOT NULL
);

ALTER TABLE `LiveIn` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `LiveIn` ADD FOREIGN KEY (`house_id`) REFERENCES `House` (`id`);

ALTER TABLE `House` ADD FOREIGN KEY (`admin_id`) REFERENCES `User` (`id`);

ALTER TABLE `Expense` ADD FOREIGN KEY (`house_id`) REFERENCES `House` (`id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`house_id`) REFERENCES `House` (`id`);
