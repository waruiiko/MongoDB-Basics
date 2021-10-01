# Chapter 2: Importing, Exporting, and Querying Data
## How does MongoDB store data?

### [JSON and BSON](https://www.mongodb.com/json-and-bson)

#### What is JSON?
JavaScript Object Notation, more commonly known as JSON, was defined as part of the JavaScript language in the early 2000s by JavaScript creator Douglas Crockford, though it wasn’t until 2013 that the format was officially specified.

JavaScript objects are simple associative containers, wherein a string key is mapped to a value (which can be a number, string, function, or even another object). This simple language trait allowed JavaScript objects to be represented remarkably simply in text:
```JSON
{
  "_id": 1,
  "name" : { "first" : "John", "last" : "Backus" },
  "contribs" : [ "Fortran", "ALGOL", "Backus-Naur Form", "FP" ],
  "awards" : [
    {
      "award" : "W.W. McDowell Award",
      "year" : 1967,
      "by" : "IEEE Computer Society"
    }, {
      "award" : "Draper Prize",
      "year" : 1993,
      "by" : "National Academy of Engineering"
    }
  ]
}
```

As JavaScript became the default language of client-side web development, JSON began to take on a life of its own. By virtue of being both human- and machine-readable, and comparatively simple to implement support for in other languages, JSON quickly moved beyond the web page, and into software everywhere.

JSON shows up in many different cases:

APIs
Configuration files
Log messages
Database storage
JSON quickly overtook XML, is more difficult for a human to read, significantly more verbose, and less ideally suited to representing object structures used in modern programming languages.

#### What is BSON?
BSON simply stands for “Binary JSON,” and that’s exactly what it was invented to be. BSON’s binary structure encodes type and length information, which allows it to be parsed much more quickly.

Since its initial formulation, BSON has been extended to add some optional non-JSON-native data types, like dates and binary data, without which MongoDB would have been missing some valuable support.

Languages that support any kind of complex mathematics typically have different sized integers (ints vs longs) or various levels of decimal precision (float, double, decimal128, etc.).

Not only is it helpful to be able to represent those distinctions in data stored in MongoDB, it also allows for comparisons and calculations to happen directly on data in ways that simplify consuming application code.

## Importing and Exporting Data
JSON
* mongoimport
* mongoexport

BSON
* mongorestore
* mongodump

Code used in this lecture:
```SHELL
 COPY
mongodump --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"

mongoexport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --collection=sales --out=sales.json

mongorestore --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"  --drop dump

mongoimport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --drop sales.json
```

## Data Explorer
Namespace - The concatenation of the database name and collection name is called a namespace.

We looked at the sample_training.zips collection and issued the following queries:

{"state": "NY"}
{"state": "NY", "city": "ALBANY"}

## Find Command
In this lesson we used the following commands:

Connect to the Atlas cluster:
```SHELL
* MAC
mongosh "mongodb+srv://sandbox.yiyle.mongodb.net/myFirstDatabase" --username m001-student
* course IDE
mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"
show dbs

use sample_training

show collections
```
it iterates through the cursor.
```SHELL
db.zips.find({"state": "NY"})

db.zips.find({"state": "NY"}).count()

db.zips.find({"state": "NY", "city": "ALBANY"})

db.zips.find({"state": "NY", "city": "ALBANY"}).pretty()
```

