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
