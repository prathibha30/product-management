INSERT INTO PRODUCTS VALUES (1,'White T-SHIRT','FASHION',500),(2,'Blue T-SHIRT','FASHION',1500),(3,'SHIRT','FASHION',700),(4,'Maggie','FOOD',20),(6,'Grapes (500gms)','FOOD',100),(7,'HEAD PHONES','ELECTRONICS',1500),(8,'Kurta','FASHION',5000),(9,'Laptop LG','ELECTRONICS',50000),(10,'TOWELS 4 pcs','FASHION',500)

INSERT INTO USERS VALUES (1,'Ramu','ram@gmail.com','Hyderabad','123'),(2,'Raju','Raju@gmail.com','Delhi','222'),(3,'SHETHAL','shethal@gmail.com','New York','12312'),(4,'Rakesh','rakesh@gmail.com','Dallas','087678'),(5,'Manoj','manoj@gmail.com','TEXAS','123212'),(6,'Ramesh','ramesh@gmail.com','Tokyo','12122')

INSERT INTO REVIEWS(Id, ProductId, UserId, Rating, Comments) VALUES (1,9,5,5,'Nice !'),(2,8,5,5,'Fantastic Item'),(3,7,3,4,'Excellent Quality !'),(4,7,3,4,'Better Quality !'),(5,6,4,4,' Quality is not good!'),(6,4,3,4,'Excellent Quality !'),(7,4,2,4,'Bad Quality !'),(8,2,3,4,'Excellent !'),(9,1,1,4,'Bad Quality'),(10,3,3,4,'Excellent Quality !')

INSERT INTO ORDERS(Id,UserId,Order_Price) VALUES (1,1,500),(2,4,20),(3,3,3020),(4,3,2200),(5,4,100),(6,5,50000),(7,5,500)
