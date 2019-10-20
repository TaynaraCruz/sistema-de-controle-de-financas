CREATE TABLE `User` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `income` DECIMAL NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `House` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `admin_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`admin_id`)
        REFERENCES `User` (`id`)
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE `LiveIn` (
    `user_id` INT,
    `house_id` INT,
    PRIMARY KEY (`user_id` , `house_id`),
    FOREIGN KEY (`user_id`)
        REFERENCES `User` (`id`)
        ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN KEY (`house_id`)
        REFERENCES `House` (`id`)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `Expense` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `value` DECIMAL NOT NULL,
    `house_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`house_id`)
        REFERENCES `House` (`id`)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `Payment` (
    `id` INT AUTO_INCREMENT,
    `user_id` INT,
    `house_id` INT,
    `date` DATE NOT NULL,
    `value` DECIMAL NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`)
        REFERENCES `User` (`id`)
        ON UPDATE NO ACTION ON DELETE NO ACTION,
    FOREIGN KEY (`house_id`)
        REFERENCES `House` (`id`)
        ON UPDATE CASCADE ON DELETE CASCADE
);
