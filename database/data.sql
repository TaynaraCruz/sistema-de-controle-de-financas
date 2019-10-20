DELETE FROM Payment;

DELETE FROM Expense;

DELETE FROM LiveIn;

DELETE FROM House;

DELETE FROM User;

INSERT INTO
	User(id, name, income, email, password)
VALUES
	(1, 'João Gabriel', 998, 'joao', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
	(2, 'José', 998, 'jose', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
	(3, 'Taynara', 998, 'taynara', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
	(4, 'Larissa', 998, 'larissa', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
	(5, 'João Victor', 998, 'jvictor', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');

INSERT INTO
	House(id, name, admin_id)
VALUES
    (1, 'The Burrow', 2);

INSERT INTO
    LiveIn(user_id, house_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1);

INSERT INTO
    Expense(id, name, date, value, house_id)
VALUES
    (1, "Rent", '2019-11-10', 1000, 1);

INSERT INTO
    Payment(id, user_id, house_id, date, value)
VALUES
    (1, 1, 1, '2019-11-10', 200),
    (2, 2, 1, '2019-11-10', 200),
    (3, 3, 1, '2019-11-10', 200),
    (4, 4, 1, '2019-11-10', 200),
    (5, 5, 1, '2019-11-10', 200);