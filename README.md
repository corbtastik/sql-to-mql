# SQL to MQL a wittle walk through

Mapping SQL operations to MQL one step at a time.

## Setup

1. Sign-up for a free-tier MongoDB cluster
    * [Atlas](https://cloud.mongodb.com)
    * Deploy an M0 free tier cluster
    * Add your machine's IP to the IP whitelist
    * Add a username, password and role
    * Once your M0 is deployed, click connect > Connect with mongo shell > copy connection string
2. Download & Install [MongoDB Community](https://www.mongodb.com/try/download/community)
    * This includes the `mongo` shell which we'll need
    * No local MongoDB server is needed if your using Atlas
3. Connect to your cluster using the example below (your connection string will be different)

```shell
# use your connection string here and YOUR-USERNAME
mongo "mongodb+srv://my-free-cluster.abcde.gcp.mongodb.net/test" --username YOUR-USERNAME
# you will be prompted for your password
```

## Inserting Many sample documents

Make sure you've done the "Setup" section then copy these commands to load sample data.  

```javascript
// switch / create the database sql-to-mql if it does not exist
use sql-to-mql
// copy into mongo shell to insert 50 sample orders in the orders collection
db.orders.insertMany([
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "A",
    "price": 5514,
    "items": [
        {"sku":"VY-541","qty":79,"price":68},
        {"sku":"PD-583","qty":7,"price":6},
        {"sku":"RG-340","qty":2,"price":50}
    ]
  },
  {
    "cust_id": "bugs@bunny.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "B",
    "price": 2532,
    "items": [
        {"sku":"BQ-174","qty":87,"price":25},
        {"sku":"UD-833","qty":7,"price":51},
    ]
  },
  {
    "cust_id": "homer@simpson.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "C",
    "price": 3410,
    "items": [
        {"sku":"HH-240","qty":55,"price":62},
    ]
  },
  {
    "cust_id": "snoopy@peanuts.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "A",
    "price": 16838,
    "items": [
        {"sku":"RO-435","qty":97,"price":72},
        {"sku":"QG-347","qty":53,"price":98},
        {"sku":"ER-848","qty":5,"price":72},
        {"sku":"WD-607","qty":43,"price":100},
    ]
  },
  {
    "cust_id": "fred@flintstone.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "B",
    "price": 11405,
    "items": [
        {"sku":"XF-869","qty":15,"price":55},
        {"sku":"NK-270","qty":50,"price":71},
        {"sku":"AN-708","qty":74,"price":95},
    ]
  },
  {
    "cust_id": "daffy@duck.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "C",
    "price": 3591,
    "items": [
        {"sku":"VK-976","qty":37,"price":27},
        {"sku":"CV-728","qty":96,"price":27}
    ]
  },
  {
    "cust_id": "sponge@bob.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "A",
    "price": 18688,
    "items": [
        {"sku":"RH-366","qty":82,"price":95},
        {"sku":"BG-272","qty":83,"price":31},
        {"sku":"UV-042","qty":76,"price":69},
        {"sku":"IX-706","qty":39,"price":79},
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "B",
    "price": 1549,
    "items": [
        {"sku":"RE-969","qty":23,"price":8},
        {"sku":"GH-919","qty":65,"price":21}
    ]
  },
  {
    "cust_id": "tweety@bird.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "C",
    "price": 410,
    "items": [
        {"sku":"CU-771","qty":41,"price":10}
    ]
  },
  {
    "cust_id": "scooby@doo.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "A",
    "price": 4426,
    "items": [
        {"sku":"PR-964","qty":27,"price":81},
        {"sku":"GU-447","qty":98,"price":9},
        {"sku":"MG-923","qty":23,"price":59}
    ]
  },
  {
    "cust_id": "minnie@mouse.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "B",
    "price": 150,
    "items": [
        {"sku":"PR-965","qty":5,"price":10},
        {"sku":"GU-448","qty":10,"price":10}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "C",
    "price": 50,
    "items": [
        {"sku":"PR-967","qty":1,"price":10},
        {"sku":"GU-449","qty":2,"price":20},
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "A",
    "price": 510,
    "items": [
        {"sku":"PR-966","qty":10,"price":10},
        {"sku":"GU-449","qty":20,"price":20},
        {"sku":"GU-400","qty":1,"price":10}
    ]
  },
  {
    "cust_id": "bugs@bunny.com",
    "ord_date": ISODate("2020-08-03"),
    "status": "B",
    "price": 120,
    "items": [
        {"sku":"ZZ-965","qty":1,"price":10},
        {"sku":"GZ-448","qty":2,"price":10},
        {"sku":"MF-924","qty":3,"price":10},
        {"sku":"BA-273","qty":4,"price":10},
        {"sku":"US-043","qty":5,"price":10},
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-03"),
    "status": "C",
    "price": 700,
    "items": [
        {"sku":"RE-900","qty":1,"price":100},
        {"sku":"GH-765","qty":10,"price":10},
        {"sku":"RE-901","qty":5,"price":100}
    ]
  },
  {
    "cust_id": "homer@simpson.com",
    "ord_date": ISODate("2020-08-03"),
    "status": "A",
    "price": 2000,
    "items": [
        {"sku":"HH-239","qty":10,"price":50},
        {"sku":"HH-241","qty":10,"price":50},
        {"sku":"HH-242","qty":10,"price":50},
        {"sku":"HH-243","qty":10,"price":50},
    ]
  },
  {
    "cust_id": "snoopy@peanuts.com",
    "ord_date": ISODate("2020-08-03"),
    "status": "B",
    "price": 2000,
    "items": [
        {"sku":"ZO-436","qty":20,"price":10},
        {"sku":"ZG-348","qty":20,"price":10},
        {"sku":"ZR-849","qty":40,"price":20},
        {"sku":"ZD-608","qty":40,"price":20},
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-03"),
    "status": "C",
    "price": 3000,
    "items": [
        {"sku":"RE-902","qty":100,"price":10},
        {"sku":"GH-800","qty":100,"price":20}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "A",
    "price": 1250,
    "items": [
        {"sku":"GU-450","qty":100,"price":10},
        {"sku":"MG-924","qty":50,"price":5}
    ]
  },
  {
    "cust_id": "minnie@mouse.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "B",
    "price": 200,
    "items": [
        {"sku":"AA-100","qty":10,"price":10},
        {"sku":"AB-400","qty":10,"price":10}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "C",
    "price": 200,
    "items": [
        {"sku":"PR-864","qty":1,"price":25},
        {"sku":"GU-347","qty":1,"price":25},
        {"sku":"PR-764","qty":1,"price":25},
        {"sku":"GU-247","qty":1,"price":25},
        {"sku":"PR-664","qty":1,"price":25},
        {"sku":"GU-147","qty":1,"price":25},
        {"sku":"PR-564","qty":1,"price":25},
        {"sku":"GU-047","qty":1,"price":25}
    ]
  },
  {
    "cust_id": "minnie@mouse.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "A",
    "price": 700,
    "items": [
        {"sku":"RR-934","qty":10,"price":10},
        {"sku":"UU-457","qty":20,"price":20},
        {"sku":"GG-410","qty":10,"price":10},
        {"sku":"GG-411","qty":10,"price":10}
    ]
  },
  {
    "cust_id": "bugs@bunny.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "B",
    "price": 900,
    "items": [
        {"sku":"MF-000","qty":30,"price":10},
        {"sku":"BA-000","qty":30,"price":10},
        {"sku":"US-000","qty":30,"price":10}
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "C",
    "price": 2250,
    "items": [
        {"sku":"snipE-900","qty":100,"price":10},
        {"sku":"HH-765","qty":100,"price":10},
        {"sku":"EE-901","qty":50,"price":5}
    ]
  },
  {
    "cust_id": "homer@simpson.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "A",
    "price": 900,
    "items": [
        {"sku":"FF-241","qty":10,"price":20},
        {"sku":"FF-242","qty":10,"price":30},
        {"sku":"HH-143","qty":10,"price":40}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "B",
    "price": 100,
    "items": [
        {"sku":"VV-540","qty":5,"price":5},
        {"sku":"DP-580","qty":5,"price":5},
        {"sku":"GR-340","qty":5,"price":10}
    ]
  },
  {
    "cust_id": "bugs@bunny.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "C",
    "price": 300,
    "items": [
        {"sku":"BQ-175","qty":100,"price":1},
        {"sku":"UD-834","qty":200,"price":1}
    ]
  },
  {
    "cust_id": "homer@simpson.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "A",
    "price": 10000,
    "items": [
        {"sku":"HH-100","qty":100,"price":50},
        {"sku":"HH-200","qty":100,"price":50}
    ]
  },
  {
    "cust_id": "snoopy@peanuts.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "B",
    "price": 1050,
    "items": [
        {"sku":"ZR-800","qty":5,"price":10},
        {"sku":"ZD-600","qty":10,"price":100}
    ]
  },
  {
    "cust_id": "snoopy@peanuts.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "C",
    "price": 3300,
    "items": [
        {"sku":"ZR-800","qty":10,"price":10},
        {"sku":"ZD-600","qty":10,"price":100},
        {"sku":"ZR-801","qty":10,"price":10},
        {"sku":"ZD-601","qty":10,"price":100},
        {"sku":"ZR-802","qty":10,"price":10},
        {"sku":"ZD-602","qty":10,"price":100}
    ]
  },
  {
    "cust_id": "fred@flintstone.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "A",
    "price": 1500,
    "items": [
        {"sku":"XF-900","qty":50,"price":10},
        {"sku":"NK-000","qty":50,"price":10},
        {"sku":"AN-800","qty":50,"price":10},
    ]
  },
  {
    "cust_id": "fred@flintstone.com",
    "ord_date": ISODate("2020-08-05"),
    "status": "B",
    "price": 3000,
    "items": [
        {"sku":"XF-901","qty":50,"price":20},
        {"sku":"NK-899","qty":50,"price":20},
        {"sku":"AK-900","qty":50,"price":20},
    ]
  },
  {
    "cust_id": "sponge@bob.com",
    "ord_date": ISODate("2020-08-06"),
    "status": "C",
    "price": 400,
    "items": [
        {"sku":"RH-000","qty":10,"price":10},
        {"sku":"BG-000","qty":10,"price":10},
        {"sku":"IX-000","qty":20,"price":10},
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-06"),
    "status": "A",
    "price": 10000,
    "items": [
        {"sku":"AA-999","qty":100,"price":10},
        {"sku":"AB-999","qty":100,"price":10},
        {"sku":"AC-999","qty":100,"price":10},
        {"sku":"AD-999","qty":100,"price":10},
        {"sku":"AE-999","qty":100,"price":10},
        {"sku":"AF-999","qty":100,"price":10},
        {"sku":"AG-999","qty":100,"price":10},
        {"sku":"AH-999","qty":100,"price":10},
        {"sku":"AI-999","qty":100,"price":10},
        {"sku":"AJ-999","qty":100,"price":10},
    ]
  },
  {
    "cust_id": "tweety@bird.com",
    "ord_date": ISODate("2020-08-06"),
    "status": "B",
    "price": 1200,
    "items": [
        {"sku":"CU-771","qty":40,"price":10},
        {"sku":"CU-772","qty":40,"price":10},
        {"sku":"CU-773","qty":40,"price":10}
    ]
  },
  {
    "cust_id": "scooby@doo.com",
    "ord_date": ISODate("2020-08-06"),
    "status": "C",
    "price": 1760,
    "items": [
        {"sku":"BR-964","qty":20,"price":10},
        {"sku":"BU-447","qty":20,"price":10},
        {"sku":"BG-123","qty":40,"price":2},
        {"sku":"BR-264","qty":40,"price":2},
        {"sku":"BU-437","qty":60,"price":10},
        {"sku":"BG-993","qty":60,"price":10}
    ]
  },
  {
    "cust_id": "minnie@mouse.com",
    "ord_date": ISODate("2020-08-06"),
    "status": "A",
    "price": 1000,
    "items": [
        {"sku":"SS-164","qty":50,"price":10},
        {"sku":"SS-247","qty":50,"price":10}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-06"),
    "status": "B",
    "price": 1000,
    "items": [
        {"sku":"SS-164","qty":50,"price":10},
        {"sku":"SS-247","qty":50,"price":10}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-07"),
    "status": "C",
    "price": 2100,
    "items": [
        {"sku":"PD-500","qty":20,"price":100},
        {"sku":"RG-300","qty":2,"price":50}
    ]
  },
  {
    "cust_id": "bugs@bunny.com",
    "ord_date": ISODate("2020-08-07"),
    "status": "A",
    "price": 10000,
    "items": [
        {"sku":"QQ-100","qty":50,"price":100},
        {"sku":"QQ-101","qty":50,"price":100}
    ]
  },
  {
    "cust_id": "homer@simpson.com",
    "ord_date": ISODate("2020-08-07"),
    "status": "B",
    "price": 2000,
    "items": [
        {"sku":"LL-241","qty":100,"price":10},
        {"sku":"LL-241","qty":100,"price":10}
    ]
  },
  {
    "cust_id": "snoopy@peanuts.com",
    "ord_date": ISODate("2020-08-07"),
    "status": "C",
    "price": 15000,
    "items": [
        {"sku":"ER-840","qty":50,"price":200},
        {"sku":"WD-617","qty":50,"price":100}
    ]
  },
  {
    "cust_id": "fred@flintstone.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "A",
    "price": 2550,
    "items": [
        {"sku":"XD-870","qty":15,"price":100},
        {"sku":"NE-271","qty":15,"price":20},
        {"sku":"AY-719","qty":15,"price":50},
    ]
  },
  {
    "cust_id": "daffy@duck.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "B",
    "price": 1800,
    "items": [
        {"sku":"VV-000","qty":30,"price":20},
        {"sku":"CC-000","qty":30,"price":40}
    ]
  },
  {
    "cust_id": "sponge@bob.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "C",
    "price": 200,
    "items": [
        {"sku":"HH-240","qty":10,"price":50},
        {"sku":"HH-241","qty":10,"price":50},
        {"sku":"HH-242","qty":10,"price":50},
        {"sku":"HH-243","qty":10,"price":50}
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "A",
    "price": 300,
    "items": [
        {"sku":"HW-440","qty":10,"price":10},
        {"sku":"HW-541","qty":10,"price":10},
        {"sku":"HW-842","qty":10,"price":10}
    ]
  },
  {
    "cust_id": "garfield@thecat.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "B",
    "price": 600,
    "items": [
        {"sku":"HW-540","qty":10,"price":20},
        {"sku":"HW-641","qty":10,"price":20},
        {"sku":"HW-942","qty":10,"price":20}
    ]
  },
  {
    "cust_id": "tweety@bird.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "C",
    "price": 500,
    "items": [
        {"sku":"CW-761","qty":20,"price":5},
        {"sku":"CW-751","qty":20,"price":5},
        {"sku":"CW-741","qty":20,"price":5},
        {"sku":"CW-731","qty":20,"price":5},
        {"sku":"CW-721","qty":20,"price":5},
    ]
  },
  {
    "cust_id": "scooby@doo.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "A",
    "price": 20100,
    "items": [
        {"sku":"PR-911","qty":20,"price":1000},
        {"sku":"QR-911","qty":20,"price":5}
    ]
  },
  {
    "cust_id": "minnie@mouse.com",
    "ord_date": ISODate("2020-08-08"),
    "status": "B",
    "price": 150,
    "items": [
        {"sku":"MM-134","qty":5,"price":10},
        {"sku":"MM-127","qty":5,"price":20}
    ]
  }])
```

## Create and Alter

SQL commands are provided as a reference to help map to the equivalent MQL operation.

### Create Table

No matter what SQL database you use, you'll need to create a Schema upfront.  It must be exact and to make matters worse the syntax varies between database make and models.  What typically happens in real applications is there's boiler-plate code and tools to pseudo manage the changes, but its brittle and non-value added.  Typically once the DDL is inked no one wants to touch it or there's a lengthy change process you gotta battle through.  It makes life hard and people weepy.

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

Look mom no DDL, the schema is self-describing by the document structure.  Validation rules can be implemented to control the structure if you need it.  MongoDB can accommodate schema-less, semi-schema or schema validated...isn't that special.

```javascript
db.orders.insertOne({
  cust_id: "porky@pig.com",
  ord_date: ISODate("2020-08-08"),
  status: "A",
  price: 430,
  comments: "This is a gift for Petunia",
  items: [
    { sku: "PP-541", qty: 10, price: 5 },
    { sku: "PP-583", qty: 20, price: 10 },
    { sku: "PP-340", qty: 15, price: 12 } ]
});
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
VALUES ("petunia@pig.com", "2020-08-06 12:00:00", "C", 100)

// child table
INSERT INTO items(order_id, sku, qty, price)
VALUES (1, "VY-541", 10, 10)

INSERT INTO items(order_id, sku, qty, price)
VALUES (1, "PD-583", 10, 10)

INSERT INTO items(order_id, sku, qty, price)
VALUES (1, "RG-340", 10, 10)  
```

```javascript
db.orders.insertOne({
  "cust_id": "petunia@pig.com",
  "ord_date": ISODate("2020-08-06"),
  "status": "C",
  "price": 100,
  "items": [
    { "sku": "VY-541", "qty":10, "price": 10 },
    { "sku": "PD-583", "qty":10, "price": 10 },
    { "sku": "RG-340", "qty":10, "price": 10 }
  ]
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
WHERE ord_date = TO_DATE("2020-08-06")
```

```javascript
db.orders.find(
    { ord_date: ISODate("2020-08-06") }
)
```

---

```SQL
SELECT cust_id, price, status
FROM orders
WHERE price = 1000
```

```javascript
db.orders.find(
    { price: 1000 },
    { cust_id: 1, price: 1, status: 1, _id: 0 }
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
AND price = 1000
```

```javascript
db.orders.find(
  { status: "A", price: 1000 }
)
```

---

```SQL
SELECT *
FROM orders
WHERE status = "A"
OR price = 1000
```

```javascript
db.orders.find(
    { $or: [ { status: "A" } , { price: 1000 } ] }
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
WHERE cust_id = "mickey@mouse.com"
AND   price > 5000
AND   price <= 10000
```

```javascript
db.orders.find(
   { price: { $gt: 5000, $lte: 10000 }, cust_id: "mickey@mouse.com" }
)
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id like "%ie%"
```

```javascript
db.orders.find( { cust_id: /ie/ } )
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id like "mi%"
```

```javascript
db.orders.find( { cust_id: /^mi/ } )
```

---

```SQL
SELECT id, cust_id, ord_date
FROM orders
WHERE status = "A"
ORDER BY cust_id ASC
```

```javascript
db.orders.find(
  { status: "A" },
  { _id: 1, cust_id: 1, ord_date: 1 } ).sort( { cust_id: 1 } )
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
SELECT COUNT(comments)
FROM orders
```

```javascript
db.orders.find( { comments: { $exists: true } } ).count()
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
db.orders.aggregate( [
    { $group : { _id : "$cust_id" } }
  ])
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id = "mickey@mouse.com"
LIMIT 3
```

```javascript
db.orders.find({ cust_id: "mickey@mouse.com" }).limit(3)
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id = "mickey@mouse.com"
ORDER BY ord_date DESC
LIMIT 3
```

```javascript
db.orders.find({ cust_id: "mickey@mouse.com" }).sort({ord_date: -1}).limit(3)
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id = "mickey@mouse.com"
LIMIT 3
SKIP 2
```

```javascript
db.orders.find({ cust_id: "mickey@mouse.com" }).limit(3).skip(2)
```

---

### Select Into

```SQL
SELECT *
INTO august_orders
FROM orders
WHERE ord_date BETWEEN TO_DATE("2020-08-01") AND TO_DATE("2020-08-31")
```

```javascript
db.orders.aggregate( [
   { $match : { ord_date: { $gte : ISODate("2020-08-01"), $lte: ISODate("2020-08-31") }}},
   { $merge : { into:  "august_orders" } }
  ])
```

### Explain

```SQL
EXPLAIN SELECT *
FROM orders
WHERE status = "A"

EXPLAIN SELECT *
FROM orders
WHERE cust_id = "mickey@mouse.com"
```

```javascript
db.orders.find({ status: "A" } ).explain()
db.orders.find({ cust_id: "mickey@mouse.com" }).explain()
```

### Update

```SQL
UPDATE orders
SET status = "X"
WHERE price > 5000
```

```javascript
db.orders.updateMany(
   { price: { $gt: 5000 } },
   { $set: { status: "X" } }
)
```

---

```SQL
UPDATE orders
SET price = price + 100
WHERE status = "X"
```

```javascript
db.orders.updateMany(
   { status: "X" } ,
   { $inc: { price: 100 } }
)
```

---

### Delete

```SQL
DELETE FROM orders
WHERE status = "X"
```

```javascript
db.orders.deleteMany( { status: "X" } )
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
   { $group: { _id: null, count: { $sum: 1 }}},
   { $project: { count: 1, _id: 0 }}
 ])
```

---

```SQL
SELECT SUM(price) AS total
FROM orders
```

```javascript
db.orders.aggregate( [
   { $group: { _id: null, total: { $sum: "$price" }}}
 ])
```

---

```SQL
SELECT cust_id, SUM(price) AS total
FROM orders
GROUP BY cust_id
```

```javascript
db.orders.aggregate( [
   { $group: { _id: "$cust_id", total: { $sum: "$price" }}}
 ])
```

---

```SQL
SELECT cust_id, SUM(price) AS total
FROM orders
GROUP BY cust_id
ORDER BY total DESC
```

```javascript
db.orders.aggregate( [
   { $group: { _id: "$cust_id", total: { $sum: "$price" }}},
   { $sort: { total: -1 }}
 ])
```

---

```SQL
SELECT cust_id, ord_date, SUM(price) AS total
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

db.orders.aggregate( [
   {
     $group: {
        _id: {
           cust_id: "$cust_id",
           ord_date: "$ord_date"
        },
        total: { $sum: "$price" }
     }
   }
] )
```

---

```SQL
SELECT cust_id, count(*)
FROM orders
GROUP BY cust_id
HAVING count(*) > 5
```

```javascript
db.orders.aggregate( [
   {
     $group: {
        _id: "$cust_id",
        count: { $sum: 1 }
     }
   },
   { $match: { count: { $gt: 5 } } }
] )
```

---

```SQL
SELECT cust_id, ord_date, SUM(price) AS total
FROM orders
GROUP BY cust_id, ord_date
HAVING total > 10000
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
   { $match: { total: { $gt: 10000 } } }
] )
```

---

```SQL
SELECT cust_id, SUM(price) as total
FROM orders
WHERE status = "A"
GROUP BY cust_id
```

```javascript
db.orders.aggregate( [
   { $match: { status: "A" }},
   { $group: { _id: "$cust_id", total: { $sum: "$price" }}}
] )
```

---

```SQL
SELECT cust_id, SUM(price) as total
FROM orders
WHERE status = "A"
GROUP BY cust_id
HAVING total > 1000
```

```javascript
db.orders.aggregate( [
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$price" }}},
   { $match: { total: { $gt: 1000 }}}
 ])
```

---

```SQL
SELECT cust_id, SUM(li.qty) as qty
FROM orders o, items li
WHERE li.order_id = o.id
GROUP BY cust_id
```

```javascript
db.orders.aggregate([
   { $unwind: "$items" },
   { $group: { _id: "$cust_id", qty: { $sum: "$items.qty" }}}
 ])
```

### Joins

```SQL
SELECT *
FROM orders o, items li
WHERE li.ord_id = o.id
```

```javascript
db.items.insertMany([
{"_id":"VY-541","inventory":1000,"price":68, "description": "A really neat product"},
{"_id":"PD-583","inventory":1000,"price":6, "description": "A really loud product"},
{"_id":"RG-340","inventory":1000,"price":50, "description": "A really clean product"},
{"_id":"BQ-174","inventory":1000,"price":25, "description": "A really smelly product"},
{"_id":"UD-833","inventory":1000,"price":51, "description": "A really quiet product"},
{"_id":"HH-240","inventory":1000,"price":62, "description": "A really colorful product"},
{"_id":"RO-435","inventory":1000,"price":72, "description": "A really cool product"},
{"_id":"QG-347","inventory":1000,"price":98, "description": "A really wizbang product"},
{"_id":"ER-848","inventory":1000,"price":72, "description": "A really sweet product"},
{"_id":"WD-607","inventory":1000,"price":100, "description": "A really new product"},
{"_id":"XF-869","inventory":1000,"price":55, "description": "A really old product"},
{"_id":"NK-270","inventory":1000,"price":71, "description": "A really well made product"},
{"_id":"AN-708","inventory":1000,"price":95, "description": "A really affordable product"},
{"_id":"VK-976","inventory":1000,"price":27, "description": "A really gorgeous product"},
{"_id":"CV-728","inventory":1000,"price":27, "description": "A really magnificent product"},
{"_id":"RH-366","inventory":1000,"price":95, "description": "A really plump product"},
{"_id":"BG-272","inventory":1000,"price":31, "description": "A really scruffy product"},
{"_id":"UV-042","inventory":1000,"price":69, "description": "A really short product"},
{"_id":"IX-706","inventory":1000,"price":79, "description": "A really skinny product"},
{"_id":"RE-969","inventory":1000,"price":8, "description": "A really stocky product"},
{"_id":"GH-919","inventory":1000,"price":21, "description": "A really ugly product"},
{"_id":"PR-964","inventory":1000,"price":81, "description": "A really beautiful product"},
{"_id":"GU-447","inventory":1000,"price":9, "description": "A really dope product"},
{"_id":"MG-923","inventory":1000,"price":59, "description": "A really dap product"},
{"_id":"PR-965","inventory":1000,"price":10, "description": "A really blue product"},
{"_id":"GU-448","inventory":1000,"price":10, "description": "A really green product"},
{"_id":"PR-966","inventory":1000,"price":10, "description": "A really lemon product"},
{"_id":"GU-449","inventory":1000,"price":20, "description": "A really purple product"},
{"_id":"PR-967","inventory":1000,"price":10, "description": "A really friendly product"},
{"_id":"GU-400","inventory":1000,"price":10, "description": "A really famous product"},
{"_id":"ZZ-965","inventory":1000,"price":10, "description": "A really easy product"},
{"_id":"GZ-448","inventory":1000,"price":10, "description": "A really hallowed product"},
{"_id":"MF-924","inventory":1000,"price":10, "description": "A really helpful product"},
{"_id":"BA-273","inventory":1000,"price":10, "description": "A really important product"},
{"_id":"US-043","inventory":1000,"price":10, "description": "A really inexpensive product"},
{"_id":"RE-900","inventory":1000,"price":100, "description": "A really mushy product"},
{"_id":"GH-765","inventory":1000,"price":10, "description": "A really odd product"},
{"_id":"RE-901","inventory":1000,"price":100, "description": "A really poor product"},
{"_id":"HH-239","inventory":1000,"price":50, "description": "A really powerful product"},
{"_id":"HH-242","inventory":1000,"price":50, "description": "A really uninterested product"},
{"_id":"HH-243","inventory":1000,"price":50, "description": "A really ambitious product"},
{"_id":"ZO-436","inventory":1000,"price":10, "description": "A really calming product"},
{"_id":"ZG-348","inventory":1000,"price":10, "description": "A really delightful product"},
{"_id":"ZR-849","inventory":1000,"price":20, "description": "A really faithful product"},
{"_id":"ZD-608","inventory":1000,"price":20, "description": "A really gentle product"},
{"_id":"RE-902","inventory":1000,"price":10, "description": "A really happy product"},
{"_id":"GH-800","inventory":1000,"price":20, "description": "A really evil product"},
{"_id":"GU-450","inventory":1000,"price":10, "description": "A really jolly product"},
{"_id":"MG-924","inventory":1000,"price":5, "description": "A really kind product"},
{"_id":"AA-100","inventory":1000,"price":10, "description": "A really lively product"},
{"_id":"AB-400","inventory":1000,"price":10, "description": "A really nice product"},
{"_id":"PR-864","inventory":1000,"price":25, "description": "A really poor product"},
{"_id":"GU-347","inventory":1000,"price":25, "description": "A really silly product"},
{"_id":"PR-764","inventory":1000,"price":25, "description": "A really witty product"},
{"_id":"GU-247","inventory":1000,"price":25, "description": "A really wonderful product"},
{"_id":"PR-664","inventory":1000,"price":25, "description": "A really zealous product"},
{"_id":"GU-147","inventory":1000,"price":25, "description": "A really bewildered product"},
{"_id":"PR-564","inventory":1000,"price":25, "description": "A really clumsy product"},
{"_id":"GU-047","inventory":1000,"price":25, "description": "A really defeated product"},
{"_id":"RR-934","inventory":1000,"price":10, "description": "A really fierce product"},
{"_id":"UU-457","inventory":1000,"price":20, "description": "A really helpless product"},
{"_id":"GG-410","inventory":1000,"price":10, "description": "A really mysterious product"},
{"_id":"GG-411","inventory":1000,"price":10, "description": "A really obnoxious product"},
{"_id":"MF-000","inventory":1000,"price":10, "description": "A really pitiful product"},
{"_id":"BA-000","inventory":1000,"price":10, "description": "A really repulsive product"},
{"_id":"US-000","inventory":1000,"price":10, "description": "A really scary product"},
{"_id":"snipE-900","inventory":1000,"price":10, "description": "A really big product"},
{"_id":"HH-765","inventory":1000,"price":10, "description": "A really colossal product"},
{"_id":"EE-901","inventory":1000,"price":5, "description": "A really great product"},
{"_id":"FF-241","inventory":1000,"price":20, "description": "A really huge product"},
{"_id":"FF-242","inventory":1000,"price":30, "description": "A really little product"},
{"_id":"HH-143","inventory":1000,"price":40, "description": "A really massive product"},
{"_id":"VV-540","inventory":1000,"price":5, "description": "A really miniature product"},
{"_id":"DP-580","inventory":1000,"price":5, "description": "A really scrawny product"},
{"_id":"GR-340","inventory":1000,"price":10, "description": "A really small product"},
{"_id":"BQ-175","inventory":1000,"price":1, "description": "A really tall product"},
{"_id":"UD-834","inventory":1000,"price":1, "description": "A really loud product"},
{"_id":"HH-100","inventory":1000,"price":50, "description": "A really ancient product"},
{"_id":"HH-200","inventory":1000,"price":50, "description": "A really modern product"},
{"_id":"ZR-800","inventory":1000,"price":10, "description": "A really prehistoric product"},
{"_id":"ZD-600","inventory":1000,"price":100, "description": "A really quick product"},
{"_id":"ZR-801","inventory":1000,"price":10, "description": "A really delicious product"},
{"_id":"ZD-601","inventory":1000,"price":100, "description": "A really greasy product"},
{"_id":"ZR-802","inventory":1000,"price":10, "description": "A really nutritious product"},
{"_id":"ZD-602","inventory":1000,"price":100, "description": "A really savory product"},
{"_id":"XF-900","inventory":1000,"price":10, "description": "A really salty product"},
{"_id":"NK-000","inventory":1000,"price":10, "description": "A really sour product"},
{"_id":"AN-800","inventory":1000,"price":10, "description": "A really spicy product"},
{"_id":"XF-901","inventory":1000,"price":20, "description": "A really yummy product"},
{"_id":"NK-899","inventory":1000,"price":20, "description": "A really bumpy product"},
{"_id":"AK-900","inventory":1000,"price":20, "description": "A really cold product"},
{"_id":"RH-000","inventory":1000,"price":10, "description": "A really dirty product"},
{"_id":"BG-000","inventory":1000,"price":10, "description": "A really fluffy product"},
{"_id":"IX-000","inventory":1000,"price":10, "description": "A really rough product"},
{"_id":"AA-999","inventory":1000,"price":10, "description": "A really sharp product"},
{"_id":"AB-999","inventory":1000,"price":10, "description": "A really strong product"},
{"_id":"AC-999","inventory":1000,"price":10, "description": "A really uneven product"},
{"_id":"AD-999","inventory":1000,"price":10, "description": "A really warm product"},
{"_id":"AE-999","inventory":1000,"price":10, "description": "A really weak product"},
{"_id":"AF-999","inventory":1000,"price":10, "description": "A really neat product"},
{"_id":"AG-999","inventory":1000,"price":10, "description": "A really adorable product"},
{"_id":"AH-999","inventory":1000,"price":10, "description": "A really difficult product"},
{"_id":"AI-999","inventory":1000,"price":10, "description": "A really important product"},
{"_id":"AJ-999","inventory":1000,"price":10, "description": "A really impossible product"},
{"_id":"CU-771","inventory":1000,"price":10, "description": "A really average product"},
{"_id":"CU-772","inventory":1000,"price":10, "description": "A really fair product"},
{"_id":"CU-773","inventory":1000,"price":10, "description": "A really stupid product"},
{"_id":"BR-964","inventory":1000,"price":10, "description": "A really strange product"},
{"_id":"BU-447","inventory":1000,"price":10, "description": "A really obnoxious product"},
{"_id":"BG-123","inventory":1000,"price":2, "description": "A really open product"},
{"_id":"BR-264","inventory":1000,"price":2, "description": "A really wicked product"},
{"_id":"BU-437","inventory":1000,"price":10, "description": "A really plain product"},
{"_id":"BG-993","inventory":1000,"price":10, "description": "A really perfect product"},
{"_id":"SS-164","inventory":1000,"price":10, "description": "A really academic product"},
{"_id":"SS-247","inventory":1000,"price":10, "description": "A really accurate product"},
{"_id":"PD-500","inventory":1000,"price":100, "description": "A really beneficial product"},
{"_id":"RG-300","inventory":1000,"price":50, "description": "A really brilliant product"},
{"_id":"QQ-100","inventory":1000,"price":100, "description": "A really complete product"},
{"_id":"QQ-101","inventory":1000,"price":100, "description": "A really common product"},
{"_id":"LL-241","inventory":1000,"price":10, "description": "A really detailed product"},
{"_id":"ER-840","inventory":1000,"price":200, "description": "A really exemplary product"},
{"_id":"WD-617","inventory":1000,"price":100, "description": "A really essential product"},
{"_id":"XD-870","inventory":1000,"price":100, "description": "A really flamboyant product"},
{"_id":"NE-271","inventory":1000,"price":20, "description": "A really fruitful product"},
{"_id":"AY-719","inventory":1000,"price":50, "description": "A really grand product"},
{"_id":"VV-000","inventory":1000,"price":20, "description": "A really grandiose product"},
{"_id":"CC-000","inventory":1000,"price":40, "description": "A really handy product"},
{"_id":"HH-241","inventory":1000,"price":50, "description": "A really impeccable product"},
{"_id":"HW-440","inventory":1000,"price":10, "description": "A really kosher product"},
{"_id":"HW-541","inventory":1000,"price":10, "description": "A really lovely product"},
{"_id":"HW-842","inventory":1000,"price":10, "description": "A really legitimate product"},
{"_id":"HW-540","inventory":1000,"price":20, "description": "A really mature product"},
{"_id":"HW-641","inventory":1000,"price":20, "description": "A really mundane product"},
{"_id":"HW-942","inventory":1000,"price":20, "description": "A really natural product"},
{"_id":"CW-761","inventory":1000,"price":5, "description": "A really novel product"},
{"_id":"CW-751","inventory":1000,"price":5, "description": "A really necessary product"},
{"_id":"CW-741","inventory":1000,"price":5, "description": "A really outlandish product"},
{"_id":"CW-731","inventory":1000,"price":5, "description": "A really outstanding product"},
{"_id":"CW-721","inventory":1000,"price":5, "description": "A really pleasing product"},
{"_id":"PR-911","inventory":1000,"price":1000, "description": "A really expensive product"},
{"_id":"QR-911","inventory":1000,"price":5, "description": "A really smooth product"},
{"_id":"MM-134","inventory":1000,"price":10, "description": "A really usable product"},
{"_id":"MM-127","inventory":1000,"price":20, "description": "A really zesty product"}
])
```

```javascript
db.orders.aggregate([   
   {
     $lookup:
       {
         from: "items",
         localField: "items.sku",
         foreignField: "_id",
         as: "inventory"
       }
  }
])
```

## References

1. [SQL to MongoDB MQL Mapping](https://docs.mongodb.com/manual/reference/sql-comparison/)
1. [SQL to MongoDB Aggreation Mapping](https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/)
