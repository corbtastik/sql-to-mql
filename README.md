# SQL to MQL a wittle walk through

Mapping SQL operations to MQL one step at a time.

To walk through this, sign-up for a free-tier MongoDB cluster on [Atlas](https://cloud.mongodb.com), download the Mongo Shell, connect and load the sample-data.json like so...

```shell
mongo "mongodb+srv://my-free-cluster.negae.gcp.mongodb.net/test" --username YOUR-USERNAME
use sql-to-mql
```

```javascript
db.orders.insertMany(COPY-THE-CONTENTS-OF-sample-data.json-HERE)
```

## Create and Alter

### Create Table

```SQL
/* parent table */
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    cust_id VARCHAR(30),
    ord_date DATETIME,
    status CHAR(1),
    price INT,
    PRIMARY KEY (id)
);
/* child table */
CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    ord_id INT,
    sku VARCHAR(30),
    qty NUMBER,
    price NUMBER,
    PRIMARY KEY (id),
    CONSTRAINT order_fk
      FOREIGN KEY (ord_id)
      REFERENCES orders (id)
)
```

```javascript
db.orders.insertOne({
  "cust_id": "porky@pig.com",
  "ord_date": ISODate("2020-08-08"),
  "status": "A",
  "price": 430,
  "items": [
    { "sku": "PP-541", "qty":10, "price": 5 },
    { "sku": "PP-583", "qty":20, "price": 10 },
    { "sku": "PP-340", "qty":15, "price": 12 }]
})
```

### Alter Table

```SQL
ALTER TABLE orders
ADD complete_date DATETIME
```

```javascript
db.orders.updateMany(
    { },
    { $set: { complete_date: new Date() } }
)
```

### Drop Column

```SQL
ALTER TABLE people
DROP COLUMN complete_date
```

```javascript
db.orders.updateMany(
    { },
    { $unset: { "complete_date": "" } }
)
```

### Single Index

```SQL
CREATE INDEX idx_cust_id_asc
ON orders(cust_id)
```

```javascript
db.orders.createIndex( { cust_id: 1 } )
```

### Compound Index

```SQL
CREATE INDEX
       idx_cust_id_asc_price_desc
ON orders(cust_id, price DESC)
```

```javascript
db.orders.createIndex( { cust_id: 1, price: -1 } )
```

### Drop Table

```SQL
DROP TABLE orders
```

```javascript
db.orders.drop()
```

### Insert

```SQL
// parent table
INSERT INTO orders(cust_id, ord_date, status, price)
VALUES ("nacho@libre.com", "2020-08-03 10:10:10", "A", 430)

// child table
INSERT INTO items(order_id, sku, qty, price)
VALUES (1, "VY-541", 10, 5)

INSERT INTO items(order_id, sku, qty, price)
VALUES (1, "PD-583", 20, 10)

INSERT INTO items(order_id, sku, qty, price)
VALUES (1, "RG-340", 15, 12)  
```

```javascript
db.orders.insertOne({
  "cust_id": "porky@pig.com",
  "ord_date": ISODate("2020-08-08"),
  "status": "A",
  "price": 430,
  "items": [
    { "sku": "PP-541", "qty":10, "price": 5 },
    { "sku": "PP-583", "qty":20, "price": 10 },
    { "sku": "PP-340", "qty":15, "price": 12 }]
})
```

### Select

```SQL
SELECT * FROM orders
```

```javascript
db.orders.find()
```

---

```SQL
SELECT order_id, cust_id, price
FROM orders
```

```javascript
db.orders.find(
    { },
    { cust_id: 1, price: 1 }
)
```

---

```SQL
SELECT cust_id, price
FROM orders
```

```javascript
db.orders.find(
    { },
    { cust_id: 1, price: 1, _id: 0 }
)
```

---

```SQL
SELECT *
FROM orders
WHERE status = "A"
```

```javascript
db.orders.find(
    { status: "A" }
)
```

---

```SQL
SELECT cust_id, price
FROM orders
WHERE price = 5514
```

```javascript
db.orders.find(
    { price: 5514 },
    { cust_id: 1, price: 1, _id: 0 }
)
```

---

```SQL
SELECT *
FROM orders
WHERE status != "A"
```

```javascript
db.orders.find(
    { status: { $ne: "A" } }
)
```

---

```SQL
SELECT *
FROM orders
WHERE status = "A"
AND price = 5514
```

```javascript
db.orders.find(
    { status: "A",
      price: 5514 }
)
```

---

```SQL
SELECT *
FROM orders
WHERE status = "A"
OR price = 5514
```

```javascript
db.orders.find(
    { $or: [ { status: "A" } , { price: 5514 } ] }
)
```

---

```SQL
SELECT *
FROM orders
WHERE price > 5000
```

```javascript
db.orders.find(
    { price: { $gt: 5000 } }
)
```

---

```SQL
SELECT *
FROM orders
WHERE price < 5000
```

```javascript
db.orders.find(
   { price: { $lt: 5000 } }
)
```

---

```SQL
SELECT *
FROM orders
WHERE price > 10000
AND   price <= 12000
```

```javascript
db.orders.find(
   { price: { $gt: 10000, $lte: 12000 } }
)
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id like "%na%"
```

```javascript
db.orders.find( { cust_id: /na/ } )
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id like "nac%"
```

```javascript
db.orders.find( { cust_id: /^nac/ } )
```

---

```SQL
SELECT *
FROM orders
WHERE status = "A"
ORDER BY cust_id ASC
```

```javascript
db.orders.find( { status: "A" } ).sort( { cust_id: 1 } )
```

---

```SQL
SELECT *
FROM orders
WHERE status = "A"
ORDER BY cust_id DESC
```

```javascript
db.orders.find( { status: "A" } ).sort( { cust_id: -1 } )
```

---

```SQL
SELECT COUNT(*)
FROM orders
```

```javascript
db.orders.count()
```

---

```SQL
SELECT COUNT(cust_id)
FROM orders
```

```javascript
db.orders.find( { cust_id: { $exists: true } } ).count()
```

---

```SQL
SELECT COUNT(*)
FROM orders
WHERE price > 5000
```

```javascript
db.orders.find( { price: { $gt: 5000 } } ).count()
```

---

```SQL
SELECT DISTINCT(cust_id)
FROM orders
```

```javascript
db.orders.distinct( "cust_id" )
db.orders.aggregate( [ { $group : { _id : "$cust_id" } } ] )
```

---

```SQL
SELECT *
FROM orders
LIMIT 3
```

```javascript
db.orders.find().limit(3)
```

---

```SQL
SELECT *
FROM orders
LIMIT 3
SKIP 2
```

```javascript
db.orders.find().limit(3).skip(2)
```

---

```SQL
EXPLAIN SELECT *
FROM orders
WHERE status = "A"
```

```javascript
db.orders.find( { status: "A" } ).explain()
```

### Update

```SQL
UPDATE orders
SET status = "C"
WHERE price > 5000
```

```javascript
db.orders.updateMany(
   { price: { $gt: 5000 } },
   { $set: { status: "C" } }
)
```

---

```SQL
UPDATE orders
SET price = price + 3
WHERE status = "A"
```

```javascript
db.orders.updateMany(
   { status: "A" } ,
   { $inc: { price: 3 } }
)
```

---

### Delete

```SQL
DELETE FROM orders
WHERE status = "C"
```

```javascript
db.orders.deleteMany( { status: "C" } )
```

---

```SQL
DELETE FROM orders
```

```javascript
db.orders.deleteMany({})
```

### Aggregations

```SQL
SELECT COUNT(*) AS count
FROM orders
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: null,
        count: { $sum: 1 }
     }
 },
 {
     $project: {
         count: 1,
         _id: 0
     }
 }
] )
```

---

```SQL
SELECT SUM(price) AS total
FROM orders
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: null,
        total: { $sum: "$price" }
     }
   }
] )
```

---

```SQL
SELECT cust_id,
       SUM(price) AS total
FROM orders
GROUP BY cust_id
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: "$cust_id",
        total: { $sum: "$price" }
     }
   }
] )
```

---

```SQL
SELECT cust_id,
       SUM(price) AS total
FROM orders
GROUP BY cust_id
ORDER BY total
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: "$cust_id",
        total: { $sum: "$price" }
     }
   },
   { $sort: { total: 1 } }
] )
```

---

```SQL
SELECT cust_id,
       ord_date,
       SUM(price) AS total
FROM orders
GROUP BY cust_id, ord_date
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: {
           cust_id: "$cust_id",
           ord_date: { $dateToString: {
              format: "%Y-%m-%d",
              date: "$ord_date"
           }}
        },
        total: { $sum: "$price" }
     }
   }
] )
```

---

```SQL
SELECT cust_id,
       count(*)
FROM orders
GROUP BY cust_id
HAVING count(*) > 1
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: "$cust_id",
        count: { $sum: 1 }
     }
   },
   { $match: { count: { $gt: 1 } } }
] )
```

---

```SQL
SELECT cust_id,
       ord_date,
       SUM(price) AS total
FROM orders
GROUP BY cust_id,
         ord_date
HAVING total > 250
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: {
           cust_id: "$cust_id",
           ord_date: { $dateToString: {
              format: "%Y-%m-%d",
              date: "$ord_date"
           }}
        },
        total: { $sum: "$price" }
     }
   },
   { $match: { total: { $gt: 250 } } }
] )
```

---

```SQL
SELECT cust_id,
       SUM(price) as total
FROM orders
WHERE status = 'A'
GROUP BY cust_id
```

```javascript
db.orders.aggregate( [
   { $match: { status: 'A' } },
   {
     $group: {
        _id: "$cust_id",
        total: { $sum: "$price" }
     }
   }
] )
```

---

```SQL
SELECT cust_id, SUM(price) as total
FROM orders
WHERE status = 'A'
GROUP BY cust_id
HAVING total > 250
```

```javascript
db.orders.aggregate( [
   { $match: { status: 'A' } },
   {
     $group: {
        _id: "$cust_id",
        total: { $sum: "$price" }
     }
   },
   { $match: { total: { $gt: 250 } } }
] )
```

---

```SQL
SELECT cust_id,
       SUM(li.qty) as qty
FROM orders o,
     order_lineitem li
WHERE li.order_id = o.id
GROUP BY cust_id
```

```javascript
db.orders.aggregate( [
   { $unwind: "$items" },
   {
     $group: {
        _id: "$cust_id",
        qty: { $sum: "$items.qty" }
     }
   }
] )
```

---

```SQL
SELECT COUNT(*)
FROM (SELECT cust_id,
             ord_date
      FROM orders
      GROUP BY cust_id,
               ord_date)
      as DerivedTable
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: {
           cust_id: "$cust_id",
           ord_date: { $dateToString: {
              format: "%Y-%m-%d",
              date: "$ord_date"
           }}
        }
     }
   },
   {
     $group: {
        _id: null,
        count: { $sum: 1 }
     }
   }
] )
```

## References

1. [SQL to MongoDB MQL Mapping](https://docs.mongodb.com/manual/reference/sql-comparison/)
1. [SQL to MongoDB Aggreation Mapping](https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/)






























### References
