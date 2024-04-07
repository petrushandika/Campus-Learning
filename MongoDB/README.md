### Database Methods

```mongodb
// Database methods
db.dropDatabase()   // Drop a database
db.getName()        // Get the name of the database
db.hostInfo()       // Get information about the host of MongoDB
db.version()        // Get the version of the database
db.stats()          // Get statistics about the database usage
```

### Database Methods for Collection

```mongodb
// Database methods for collection
db.getCollectionNames()         // Get all collection names
db.createCollection(name)       // Create a new collection
db.getCollection(name)          // Get the object of a collection
db.<name>                       // Equivalent to db.getCollection(<name>)
db.getCollectionInfos()         // Get information about all collections
```

### Collection Methods

```mongodb
// Collection methods
db.<collection>.find()          // Get all documents
db.<collection>.count()         // Get the count of documents
db.<collection>.drop()          // Drop the collection
db.<collection>.totalSize()     // Get the total size of the collection
db.<collection>.stats()         // Get statistics about the collection
```

### Insert Document Function

```mongodb
// Insert document function
db.<collection>.insertOne(document)     // Insert a document into the collection
db.<collection>.insertMany(array<document>)    // Insert all documents in an array into the collection
```

### Query Document Function

```mongodb
// Query document function
db.<collection>.find(query)     // Find documents with the specified query
```

### Comparison Operators

```mongodb
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

### Logical Operators

```mongodb
// Logical operators
$and    // AND, returns documents if all conditions are true
$or     // OR, returns documents if any condition is true
$nor    // NOR, returns documents that fail all conditions
$not    // returns documents that do not match the condition
```

### Element Operators

```mongodb
// Element operators
$exists // Matches documents that have the field
$type   // Matches documents that have the specified field type
```

### Evaluation Query Operators

```mongodb
// Evaluation query operators
$expr       // Uses aggregation operation
$jsonSchema // Validates documents according to JSON schema
$mod        // Performs modulo operation
$regex      // Matches documents according to regular expression (PCRE)
$text       // Performs text search
$where      // Retrieves documents with JavaScript Function
```

### Array Operators

```mongodb
// Array operators
$all        // Matches arrays that contain certain elements
$elemMatch  // Retrieves documents if each element in the array meets certain conditions
$size       // Retrieves documents if the array size matches
```

