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
