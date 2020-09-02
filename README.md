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
        {"sku":"PR-964","qty":5,"price":10},
        {"sku":"GU-447","qty":10,"price":10}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "C",
    "price": 50,
    "items": [
        {"sku":"PR-964","qty":1,"price":10},
        {"sku":"GU-447","qty":2,"price":20},
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-02"),
    "status": "A",
    "price": 510,
    "items": [
        {"sku":"PR-964","qty":10,"price":10},
        {"sku":"GU-447","qty":20,"price":20},
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
        {"sku":"HH-240","qty":10,"price":50},
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
        {"sku":"RE-900","qty":100,"price":10},
        {"sku":"GH-800","qty":100,"price":20}
    ]
  },
  {
    "cust_id": "mickey@mouse.com",
    "ord_date": ISODate("2020-08-04"),
    "status": "A",
    "price": 1250,
    "items": [
        {"sku":"GU-447","qty":100,"price":10},
        {"sku":"MG-923","qty":50,"price":5}
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
        {"sku":"HH-243","qty":10,"price":40}
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
    "price": 600,
    "items": [
        {"sku":"BQ-174","qty":100,"price":1},
        {"sku":"UD-833","qty":200,"price":1},
        {"sku":"BQ-174","qty":300,"price":1}
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
WHERE cust_id like "%mi%"
```

```javascript
db.orders.find( { cust_id: /mi/ } )
```

---

```SQL
SELECT *
FROM orders
WHERE cust_id like "mic%"
```

```javascript
db.orders.find( { cust_id: /^mic/ } )
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
