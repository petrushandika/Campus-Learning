/*
General operation MongoDB:
- Insert
- Find
- Update
- Delete
- Aggregate
- Indexing
- Text Search
- Geospatial Queries
- Change Streams
- Transaction
*/

// ------------------------------------------------------------
// Create collection
db.createColletion(collection);

// Show database inside
db.getCollectionNames();

// ------------------------------------------------------------
// Find all collection
db.collection.find();

// Find spesific collection inside
db.collection.find({
  price: {
    $gt: 50000,
  },
});

// Find one collection
const collection = db.collection.findOne({ name: "Isah Veronika" });

printjson(collection);

// ------------------------------------------------------------
// Update one collection
db.collection.updateOne({ id: 1 }, { $set: { name: "Annisa Putri" } });

// Update all date collection
db.collection.updateMany(
  {},
  { $currentDate: { lastModified: { $type: "date" } } }
);

// ------------------------------------------------------------
// Delete one collection
db.collection.insertOne({
  id: "spammer",
});

db.collection.deleteOne({
  id: "spammer",
});

// Delete all collection
db.collection.deleteMany({});

// Delete collection using regex
db.collection.insertMany([
    {
        id: "spammer1",
        full_name: "spammer"
    },
    {
        id: "spammer2",
        full_name: "spammer"
    },
    {
        id: "spammer3",
        full_name: "spammer"
    },
])

db.collection.deleteMany({
  id: {
    $regex: "spammer",
  },
});

// ------------------------------------------------------------
// Aggregate
db.collection.aggregate([
  {
    $group: {
      _id: "$address.city",
      total_customers: { $sum: 1 },
    },
  },
]);

// ------------------------------------------------------------
// Indexing
db.collection.createIndex({ name: "text" });

db.collection.createIndex({ price: 1 });

// Show indexing
db.collection.getIndexes();

// Drop one indexing
db.collection.dropIndexes("name");

// Drop all indexing
db.collection.dropIndexes();

// ------------------------------------------------------------
// Text search
db.collection.createIndex({ name: "text", description: "text" });
db.collection.find({ $text: { $search: "basketball shoes" } });
