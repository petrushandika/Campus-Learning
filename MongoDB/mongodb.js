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

// Find data with Query Modifier Function
db.products.find({}).count();

db.products.find({}).limit(4);

db.products.find({}).skip(2).limit(4);

db.products.find({}).sort({ category: 1, name: -1 }).limit(4);

// Update data with Update Document Function
db.products.updateOne(
  { _id: 1 },
  { $set: { name: "Fried Chicken", category: "food" } }
);

db.products.updateOne({ _id: 2 }, { $set: { category: "food" } });

db.products.updateMany(
  { $and: [{ category: { $eq: "food" } }, { tags: { $exists: false } }] },
  { $set: { tags: ["food"] } }
);

db.products.insertOne({ _id: 11, name: "Ups salah", wrong: "salah" });

db.products.replaceOne(
  { _id: 11 },
  {
    name: "Adidas Running Shoes",
    price: new NumberLong("1200000"),
    category: "shoes",
    tags: ["adidas", "running", "shoes"],
  }
);

// Update data with Field Operator
db.products.updateMany(
  {},
  {
    $set: {
      stock: 0,
    },
  }
);

db.products.updateMany(
  {},
  {
    $inc: {
      stock: 10,
    },
  }
);

db.customers.updateMany(
  {},
  {
    $rename: {
      name: "full_name",
    },
  }
);

db.customers.updateMany(
  {},
  {
    $set: {
      wrong: "ups",
    },
  }
);

db.customers.updateMany(
  {},
  {
    $unset: {
      wrong: "",
    },
  }
);

db.products.updateMany(
  {},
  {
    $currentDate: {
      lastModified: {
        $type: "date",
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

db.products.updateMany(
  {
    ratings: 90,
  },
  {
    $set: {
      "ratings.$": 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[element]": 100,
    },
  },
  {
    arrayFilters: [
      {
        element: {
          $gte: 80,
        },
      },
    ],
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      "ratings.0": 50,
      "ratings.1": 60,
    },
  }
);

db.products.find({ _id: 1 });

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $addToSet: {
      tags: "popular",
    },
  }
);

db.products.updateOne(
  {
    _id: 1,
  },
  {
    $pop: {
      ratings: -1,
    },
  }
);

db.products.find({ _id: 2 });

db.products.updateOne(
  {
    _id: 2,
  },
  {
    $pop: {
      ratings: 1,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

db.products.updateMany(
  {},
  {
    $pull: {
      ratings: {
        $gte: 80,
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $push: {
      ratings: 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [100, 0],
    },
  }
);

db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300],
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $addToSet: {
      tags: {
        $each: ["trending", "popular"],
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["hot"],
        $position: 1,
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $sort: -1,
      },
    },
  }
);

db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $slice: 10,
        $sort: -1,
      },
    },
  }
);

db.customers.insertOne({
  _id: "spammer",
  full_name: "Spammer",
});

db.customers.deleteOne({
  _id: "spammer",
});

db.customers.insertMany([
  {
    _id: "spammer1",
    full_name: "Spammer",
  },
  {
    _id: "spammer2",
    full_name: "Spammer",
  },
  {
    _id: "spammer3",
    full_name: "Spammer",
  },
]);

db.customers.deleteMany({
  _id: {
    $regex: "spammer",
  },
});

db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "eko",
        full_name: "Eko",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "kurniawan",
        full_name: "Kurniawan",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["eko", "kurniawan", "khaneddy"],
        },
      },
      update: {
        $set: {
          full_name: "Eko Kurniawan Khaneddy",
        },
      },
    },
  },
]);

db.products.createIndex({
  category: 1,
});

db.products.dropIndex("category_1");

db.products.find({
  category: "food",
});

db.products
  .find({
    category: "food",
  })
  .explain();

db.products
  .find({
    category: "food",
  })
  .sort({
    category: 1,
  })
  .explain();

db.products
  .find({
    category: "food",
  })
  .sort({
    category: -1,
  })
  .explain();

db.products
  .find({
    tags: "samsung",
  })
  .explain();

db.products.createIndex({
  stock: 1,
  tags: 1,
});

db.products.find({
  stock: 10,
  tags: "popular",
});

db.products
  .find({
    stock: 10,
    tags: "popular",
  })
  .explain();

db.products
  .find({
    name: "samsung",
    tags: "popular",
  })
  .explain();


