Products:

   1. Id Number Primary Key
   2. Name String
   3. Price Number
   4. Category String


Primary Key : ProductId

Functional Dependencies : ProductId -> Name, Price, Category



Users:
    1. Id Number Primary Key
    2. Name String
    3. Email String
    4. Address String
    5. Phone Number String

Functional Dependencies : Id -> Name, Email, Address


Reviews:

    1. Id Number Primary Key
    2. ProductId Number Foreign Key References Products(Id)
    3. UserId Number Foreign Key References Users(Id) ON DELETE CASCADE
    4. Rating Number 
    5. Comments String
    6. CreatedAt Date

Functional Dependencies : Id -> ProductId, UserId, Rating, Comments, Date

Policies: 
    Id-> Restrict: A product should not be deleted if any reviews are associated with it
    UserId-> CASCADE: If User deleted reviews are associated with should be deleted

Orders:
    1. Id Number Primary Key
    2. UserId Number Foreign Key References Users(Id)
    3. Order_Price Number
    4. placed_date Date

Functional Dependencies : Id -> UserId,Price, Date

Policies:
    UserId-> Restrict : Order should not be placed if there is no user exist


