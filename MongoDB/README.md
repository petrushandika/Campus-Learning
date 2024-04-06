### Database Methods

```javascript
// Database methods
db.dropDatabase()   // Drop a database
db.getName()        // Get the name of the database
db.hostInfo()       // Get information about the host of MongoDB
db.version()        // Get the version of the database
db.stats()          // Get statistics about the database usage
```

### Database Methods for Collection

```javascript
// Database methods for collection
db.getCollectionNames()         // Get all collection names
db.createCollection(name)       // Create a new collection
db.getCollection(name)          // Get the object of a collection
db.<name>                       // Equivalent to db.getCollection(<name>)
db.getCollectionInfos()         // Get information about all collections
```

### Collection Methods

```javascript
// Collection methods
db.<collection>.find()          // Get all documents
db.<collection>.count()         // Get the count of documents
db.<collection>.drop()          // Drop the collection
db.<collection>.totalSize()     // Get the total size of the collection
db.<collection>.stats()         // Get statistics about the collection
```

### Insert Document Function

```javascript
// Insert document function
db.<collection>.insertOne(document)     // Insert a document into the collection
db.<collection>.insertMany(array<document>)    // Insert all documents in an array into the collection
```

### Query Document Function

```javascript
// Query document function
db.<collection>.find(query)     // Find documents with the specified query
```

### Comparison Operators

```javascript
// Comparison operators
$eq     // Equal
$gt     // Greater Than
$lt     // Less Than
$gte    // Greater Than Equal
$lt     // Less Than
$lte    // Less Than Equal
$in     // In
$nin    // Not In
$ne     // Not Equal
```

