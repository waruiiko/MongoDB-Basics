# Chapter 5: Indexing and Aggregation Pipeline
## Aggregation Framework 
[Aggregation Pipeline](https://www.cnblogs.com/shanyou/p/3494854.html):
Learn how to use MongoDB's Aggregation Framework.
```s
db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1, "_id": 0 }).pretty()

# Using the aggregation framework find all documents that have Wifi as one of the amenities``*. Only include* ``price and address in the resulting cursor.
db.listingsAndReviews.aggregate([
                                  { "$match": { "amenities": "Wifi" } },
                                  { "$project": { "price": 1,
                                                  "address": 1,
                                                  "_id": 0 }}]).pretty()

# Find one document in the collection and only include the address field in the resulting cursor.
db.listingsAndReviews.findOne({ },{ "address": 1, "_id": 0 })

# Project only the address field value for each document, then group all documents into one document per address.country value.
db.listingsAndReviews.aggregate([ { "$project": { "address": 1, "_id": 0 }},
                                  { "$group": { "_id": "$address.country" }}])

# Project only the address field value for each document, then group all documents into one document per address.country value, and count one for each document in each group.
db.listingsAndReviews.aggregate([
                                  { "$project": { "address": 1, "_id": 0 }},
                                  { "$group": { "_id": "$address.country",
                                                "count": { "$sum": 1 } } }
                                ])

db.listingsAndReviews.aggregate([
                                  { "$project": { "room_type": 1, "_id": 0 }},
                                  { "$group": { "_id": "$room_type",
                                                "count": { "$sum": 1 } } }
                                ])
```

## sort() and limit()
use sort() first
While the limit() and sort() methods are not listed in the correct order, MongoDB flips their order when executing the query, delivering the results that the question prompt is looking for.
```s
use sample_training
db.zips.find().sort({ "pop": 1 }).limit(1)
db.zips.find({ "pop": 0 }).count()
db.zips.find().sort({ "pop": -1 }).limit(1)
db.zips.find().sort({ "pop": -1 }).limit(10)
db.zips.find().sort({ "pop": 1, "city": -1 }).pretty()

db.trips.find({"birth year":{"$ne":null}},{"birth year":1}).sort({"birth year":-1}).limit(1).pretty()
db.trips.find({"birth year":{"$ne":""}},{"name":1,"birth year":1}).sort({"birth year":-1}).limit(1).pretty()
```

## Introduction to Indexes
[MongoDB Performance](https://university.mongodb.com/courses/M201/about):
Learn how to optimize the performance of your MongoDB deployment.
```s
#Index
db.trips.createIndex({"birth year":1})
#Queries
db.trips.find({ "birth year": 1989})
db.trips.find({ "start station id":476}).sort({"birth year":1})
            #{station id:476}-->Use "birth year" index
#Compound Index
db.trips.createIndex({"start station id":1,"birth year": 1})

use sample_training
db.trips.find({ "birth year": 1989 })
db.trips.find({ "start station id": 476 }).sort( { "birth year": 1 } )
db.trips.createIndex({ "birth year": 1 })
db.trips.createIndex({ "start station id": 1, "birth year": 1 })
```

## Introduction to Data Modeling
Data Modeling:a way to organize fields in a document to support your application performance and querying capabilities.
[Data Modeling](https://university.mongodb.com/courses/M320/about):
Learn everything you need to know about data modeling for MongoDB.

## Upsert - Update or Insert?
Everything in MQL that is used to locate a document in a collection can also be used to modify this document.
```s
db.collection.updateOne({<query to locate>},{<update>})
```

Upsert is a hybird of update and insert, it should only be used when it is needed.
```s
db.collection.updateOne({<query>},{<update>},{"upsert":true})
```