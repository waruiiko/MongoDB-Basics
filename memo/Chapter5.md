# Chapter 5: Indexing and Aggregation Pipeline
## Aggregation Framework 
[Aggregation Pipeline](https://www.cnblogs.com/shanyou/p/3494854.html)
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