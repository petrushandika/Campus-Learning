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

### Projection Operator

```mongodb
// Projection Operator
db.<collection>.find(query, projection)
$           // Limit array to return only the first data that matches with array operator
$elemMatch  // Limit array to return only the first data that matches with query condition
$meta       // Returns metadata information obtained from each matching document
$slice      // Controls the amount of data displayed in the array
```

### Query Modifier Function

```mongodb
// Query Modifier Function
count()     // Get the count of data resulting from the query
limit(size) // Limit the number of data obtained from the query
skip(size)  // Skip the first data resulting from the query by the specified amount
sort(query) // Sort the query result data
```

### Update Document Function

```mongodb
// Update Document Function
updateOne() // Update one document
updateMany()// Update many documents at once
replaceOne()// Replace one document entirely with a new document
```

### Field Update Operator

```mongodb
// Field Update Operator
$set            // Modify the value of a field in the document
$unset          // Remove a field from the document
$rename         // Rename a field in the document
$inc            // Increment the value of a number field by a certain amount
$currentDate    // Modify a field to the current date and time
```

### Array Update Operator

```mongodb
// Array Update Operator
$               // Update the first array data that matches the query condition
$[]             // Update all array data that matches the query condition
$[<identifier>]// Update all array data that matches the arrayFilters condition
<index>         // Update array data according to the index number
$addToSet       // Add a value to the array, ignored if it already exists
$pop            // Remove the first (-1) or last (1) element from the array
$pull           // Remove all elements in the array that match the condition
$push           // Add an element to the array
$pullAll        // Remove all elements in the array
```

### Array Update Operator Modifier

```mongodb
// Array Update Operator Modifier
$each       // Used in $addToSet and $push to add multiple elements
$position   // Used in $push to change the position of adding data
$slice      // Used in $push to determine the maximum number of array data
$sort       // Used to sort the array after the $push operation
```

### Delete Document Function

```mongodb
// Delete Document Function
db.<collection>.deleteOne(query)   // Deletes one document that matches the query condition
db.<collection>.deleteMany(query)  // Deletes many documents that match the query condition
```

### Bulk Write Function

```mongodb
// Bulk Write Function
db.<collection>.insertMany()   // Insert multiple documents at once
db.<collection>.updateMany()   // Update multiple documents at once
db.<collection>.deleteMany()   // Delete multiple documents at once
db.<collection>.bulkWrite()    // Perform bulk write operations (insert, update, delete) at once
```

### Create Index Function

```mongodb
// Create Index Function
db.<collection>.createIndex()   // Create an index on the collection
db.<collection>.getIndexes()    // View all indexes on the collection
db.<collection>.dropIndex()     // Drop an index on the collection
```
