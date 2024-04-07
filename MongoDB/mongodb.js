// Create new folder data on database
db.createCollection(customers);
db.createCollection(products);
db.createCollection(orders);

// Show database inside
db.getCollectionNames();

// View folder data
db.customers.find();

// Insert data with insertOne
db.customers.insertOne({ _id: "petrus", name: "Petrus Handika" });

// Insert data with insertMany
db.products.insertMany([
  { _id: 1, name: "Fried Chicken", price: NumberLong("2000") },
  { _id: 2, name: "Spaghetti", price: NumberLong("2000") },
]);

// Insert data with insertOne
db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong("8000"),
  items: [
    {
      product_id: 1,
      price: new NumberLong("2000"),
      quantity: new NumberInt("2"),
    },
    {
      product_id: 2,
      price: new NumberLong("2000"),
      quantity: new NumberInt("2"),
    },
  ],
});

// Find data
db.customers.find({ _id: "petrus" });

db.customers.find({ name: "Petrus Handika" });

db.products.find({ price: 2000 });

db.orders.find({ "items.product_id": 1 });

// Add data use isertMany
db.products.insertMany([
  { _id: 3, name: "Noodles", price: NumberLong("2500"), category: "food" },
  {
    _id: 4,
    name: "Iphone 11 Pro Max",
    price: NumberLong("10000000"),
    category: "handphone",
  },
  {
    _id: 5,
    name: "Macbook M2 Pro",
    price: NumberLong("15000000"),
    category: "laptop",
  },
]);

// Find data with Comparison Operator
db.products.find({ price: { $gt: 2000 } });

db.products.find({
  category: { $in: ["laptop", "handphone"] },
  price: { $gt: 10000000 },
});

// Find data with Logical Operator
db.products.find({
  $and: [
    { category: { $in: ["laptop", "handphone"] } },
    { price: { $gt: 10000000 } },
  ],
});

db.products.find({ category: { $not: { $in: ["laptop", "handphone"] } } });

// Find data with Element Operator
db.products.find({ category: { $exists: true } });

db.products.find({ category: { $exists: false } });

db.products.find({ category: { $type: "string" } });

db.products.find({ category: { $type: ["int", "long"] } });

// Insert document with insertOne
db.customers.insertOne({ _id: "john", name: "John Doe" });
db.customers.insertOne({ _id: "udin", name: "udin" });

// Find data with evaluation query operator
db.customers.find({ $expr: { $eq: ["$_id", "$name"] } });

db.products.find({ $jsonSchema: { required: ["name", "category"] } });

db.products.find({ price: { $mod: [1000000, 0] } });

db.products.find({ name: { $regex: /Iphone/, $options: "i" } });

db.products.find({ name: { $regex: /^Macbook/ } });

db.products.find({
  $where: function () {
    return this._id == this.name;
  },
});

// add data with insertMany
db.products.insertMany([
  {
    _id: 6,
    name: "Logitech Wireless Mouse",
    price: new NumberLong("175000"),
    category: "mouse",
    tags: ["logitech", "computer", "mouse", "accessories"],
  },
  {
    _id: 7,
    name: "Cooler Pad Gaming",
    price: new NumberLong("200000"),
    category: "pad",
    tags: ["cooler", "computer", "fan", "accessories"],
  },
  {
    _id: 8,
    name: "Rexus Mouse Gaming",
    price: new NumberLong("100000"),
    category: "mouse",
    tags: ["rexus", "computer", "mouse", "accessories"],
  },
  {
    _id: 9,
    name: "Samsung Curve Monitor",
    price: new NumberLong("1750000"),
    category: "monitor",
    tags: ["samsung", "computer", "monitor"],
  },
  {
    _id: 10,
    name: "Samsung Galaxy",
    price: new NumberLong("1200000"),
    category: "handphone",
    tags: ["samsung", "phone", "cellphone"],
  },
]);

// Find data with array operator
db.products.find({ tags: { $all: ["samsung", "monitor"] } });

db.products.find({ tags: { $elemMatch: { $in: ["samsung", "logitech"] } } });

db.products.find({ tags: { $size: 3 } });

// Find data with projection operator
db.products.find({}, { name: 1, category: 1 });

db.products.find({}, { tags: 0, price: 0 });

db.products.find(
  {},
  {
    name: 1,
    tags: { $elemMatch: { $in: ["samsung", "logitech", "accessories"] } },
  }
);

db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    "tags.$": 1,
  }
);

db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    tags: {
      $slice: 2,
    },
  }
);

