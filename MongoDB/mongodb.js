// Create new folder data on database
db.createCollection("customers");
db.createCollection("products");
db.createCollection("orders");

// Show database inside
db.getCollectionNames();

// View folder data
db.customers.find();

// Insert document with insertOne
db.customers.insertOne({
    "_id": "petrus",
    "name": "Petrus Handika"
})

// Insert document with insertMany
db.products.insertMany([
    {
        "_id": 1,
        "name": "Fried Chicken",
        "price": NumberLong("2000")
    },
    {
        "_id": 2,
        "name": "Spaghetti",
        "price": NumberLong("2000")
    }
])

// Insert document with insertOne
db.orders.insertOne({
    "_id": new ObjectId(),
    "total": new NumberLong("8000"),
    "items": [
        {
            "product_id": 1,
            "price": new NumberLong("2000"),
            "quantity": new NumberInt("2")
        },
        {
            "product_id": 2,
            "price": new NumberLong("2000"),
            "quantity": new NumberInt("2")
        }
    ]
})

// Find data
db.customers.find({
    "_id": "petrus"
})

db.customers.find({
    "name": "Petrus Handika"
})

db.products.find({
    price: 2000
})

db.orders.find({
    "items.product_id" : 1
})

// Add data use isertMany
db.products.insertMany([
    {
        "_id": 3,
        "name": "Noodles",
        "price": NumberLong("2500"),
        "category": "food"
    },
    {
        "_id": 4,
        "name": "Iphone 11 Pro Max",
        "price": NumberLong("10000000"),
        "category": "handphone"
    },
    {
        "_id": 5,
        "name": "Macbook M2 Pro",
        "price": NumberLong("15000000"),
        "category": "laptop"
    }
])

// Find data with Comparison Operator
db.products.find({
    "price": {
        $gt: 2000
    }
})

db.products.find({
    "category": {
        $in: ["laptop", "handphone"]
    },
    "price": {
        $gt: 10000000
    }
})

