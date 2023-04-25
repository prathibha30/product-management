
Products

INSERT INTO Products(Name,Category,Price) VALUES ('T-Shirt','Fashion','250')
UPDATE Products SET Name='T-SHIRT (1pcs)',Price='100', Category = 'Fashion' Where Id = 1
DELETE FROM PRODUCTS where Id=1
SELECT * FROM PRODUCTS


USERS

INSERT INTO USERS(Name,Email,Address,Phone) VALUES ('Test_User','test@gmail.com','Dallas','12132')
UPDATE Users SET Address='India',Phone='5324', Email = 'test1@gmail.com',Name = 'Test_User1' Where Id =1
DELETE FROM USERS Where Id=1
SELECT * FROM USERS

Reviews

INSERT INTO Reviews(ProductId ,UserId ,Rating, Comments) VALUES (1,1,'5','Nice !')
UPDATE Reviews SET Rating = '4',Comments = 'Good!' Where Id = 1
DELETE FROM REVIEWS Where Id=1
SELECT * FROM REVIEWS

ORDERS
INSERT INTO Orders(UserId,Price,placed_date) VALUES ('1','500','22-01-2002')
UPDATE Orders SET Price='520',placed_date='22-02-2022' Where Id = 1
DELETE FROM ORDERS Where Id=1
SELECT * FROM ORDERS
