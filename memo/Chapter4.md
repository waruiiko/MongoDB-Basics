# Chapter 4: Advanced CRUD Operations
## Query Operators - Comparison
    $eq = EQual to
    $ne = Not Equal to
    $gt = Greater Than
    $lt = Less Than
    $gte = Greater Than or Equal to
    $lte = Less Than or Equal to
```s
{<field>:{<operator>:<value>}}

db.zips.count({ "pop": { "$lt" : 1000 }})
db.zips.find({ “pop”: { “$lt”: 1000 }}).count()
```

## Query Operators - Logic
```s
{<operator>:[{statement1},{statement2},...]}
    $and 
    Match all of the specified query clauses
    {sector:"Mobile Food Vendor - 881",result:"Warning"}
    {"$and":[{sector:"Mobile Food Vendor - 881"},{result:"Warning"}]}
    {"student_id":{"$gt":25,"$lt":100}}
    $or 
    At least one of the query clauses is matched
    {"$or":[{airplane:"CR2"},{airplane:"A81"}]}
    $nor
    Fail to match both given clauses
{$not:{statement}}
    $not 
    Negates the query requirement
```

## Expressive Query Operator
```s
    {$expr:{<expression>}}
```
$expr allows us to use variables and conditional statements

## Array Operators
{<array field>:{"$size":<number>}}
Returns a cursor with all documents where the specified array field is exactly the given length.

{<array field>:{"$all":<array>}}
Returns a cursor with all documents in which the specified array field contains all the given elements regardless of their order in the array.
```s
db.listingsAndReviews.find({"amenities":{"$size": 20,"$all":["Internet", "Wifi","Kitchen","Heating", "Family/kid friendly","Washer", "Dryer","Essentials","Shampoo","Hangers","Hair dryer", "Iron","Laptop friendly workspace"]}}).pretty()
db.listingsAndReviews.find({"$and": [{"accommodates":{"$gt":6},"reviews":{"$size": 50}}]}).pretty()
```

## Array Operators and Projection
### Projection Syntax
1 - include the field
0 - exclude the field
Use only 1s or only 0s
```s
    db.<collections>.find({<query>},{<field1>:1,<field2>:1})
    db.<collections>.find({<query>},{<field1>:0,<field2>:0})
    #exception
    db.<collections>.find({<query>},{<field1>:1,"_id":0})
```

### Projection and $elemMatch
db.<collection>.find({<query>},{<projection>})
Specifies which fields should or should not be included in the result cursor.
Do not combine 1s and 0s in a projection.
* Except for {"_id:0",<field>:1}

{<field>:{"$elemMatch":{<field>:<value>}}}
Matches documents that contain an array field with at least one element that matches the specified query criteria.
or
Projects only the array elements with at least one element that matches the specified criteria.
```s
# Find all documents where the student in class 431 received a grade higher than 85 for any type of assignment:
db.grades.find({"class_id":431},{"scores":{"$elemMatch":{"score":{"$gt":85}}}}).pretty()

# Find all documents where the student had an extra credit score:
db.grades.find({"scores":{"$elemMatch":{"type":"extra credit"}}}).pretty()
```

## Array Operators and Sub-Documents
### Querying arrays and sub-documents
MQL uses dot-notation to specify the address of nested elements in a document
To use dot-notation in arrays specify the position of the element in the array.
```s
db.collection.find({"field 1.other field.also a field":"value"})

use sample_training
db.trips.findOne({ "start station location.type": "Point" })
db.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },
                  { "name": 1 }).pretty()
db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": { "$regex": "CEO" } },
                  { "name": 1 }).count()
db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": {"$regex": "CEO" } },
                  { "name": 1 }).pretty()
db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).pretty()
db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).count()
```