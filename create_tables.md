CREATE TABLE Products( 
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, 
    Name VARCHAR,
    Category VARCHAR,
    Price Number
)

CREATE TABLE Users( 
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    Name VARCHAR,
    Email VARCHAR,
    Address VARCHAR,
    Phone VARCHAR
)

CREATE TABLE Reviews( 
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    ProductId Number Foreign Key References Products(Id) ON DELETE RESTRICT,
    UserId Number Foreign Key References Users(Id) oN DELETE CASCADE,
    Rating Number,
    Comments String,
    CreatedAt Date DEFAULT (date('now')),
)

CREATE TABLE Orders( 
    Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    UserId Number Foreign Key References Users(Id) ON DELETE RESTRICT, 
    Order_Price Number, 
    placed_date Date
)
