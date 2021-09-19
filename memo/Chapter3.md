# Chapter 3: Creating and Manipulating Documents
## Inserting New Documents - ObjectId

## Inserting New Documents - insert() and errors
```s
    mongoimport --uri="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/sample_supplies" sales.json

    mongo "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/admin"

    use sample_training

    db.inspections.findOne();

    db.inspections.insert({
      "_id" : ObjectId("56d61033a378eccde8a8354f"),
      "id" : "10021-2015-ENFO",
      "certificate_number" : 9278806,
      "business_name" : "ATLIXCO DELI GROCERY INC.",
      "date" : "Feb 20 2015",
      "result" : "No Violation Issued",
      "sector" : "Cigarette Retail Dealer - 127",
      "address" : {
              "city" : "RIDGEWOOD",
              "zip" : 11385,
              "street" : "MENAHAN ST",
              "number" : 1712
         }
  })

db.inspections.insert({
      "id" : "10021-2015-ENFO",
      "certificate_number" : 9278806,
      "business_name" : "ATLIXCO DELI GROCERY INC.",
      "date" : "Feb 20 2015",
      "result" : "No Violation Issued",
      "sector" : "Cigarette Retail Dealer - 127",
      "address" : {
              "city" : "RIDGEWOOD",
              "zip" : 11385,
              "street" : "MENAHAN ST",
              "number" : 1712
         }
  })

db.inspections.find({"id" : "10021-2015-ENFO", "certificate_number" : 9278806}).pretty()
```

## Inserting New Documents - insert() order

## Updating Documents - Data Explorer

## Updating Documents - mongo shell

* increments field value by a specified amount
  Update all documents in the zips collection where the city field is equal to "HUDSON" by adding 10 to the current value of the "pop" field.
```s
db.zips.updateMany({ "city": "HUDSON" }, { "$inc": { "pop": 10 } })
```

* sets field value to a new specified value
  Update a single document in the zips collection where the zip field is equal to "12534" by setting the value of the "pop" field to 17630.
```s
db.zips.updateOne({ "zip": "12534" }, { "$set": { "pop": 17630 } })
```

* adds an element to an array field
  Update one document in the grades collection where the student_id is ``250`` *, and the class_id field is 339 , by adding a document element to the "scores" array.
```s
db.grades.updateOne({ "student_id": 250, "class_id": 339 },
                    { "$push": { "scores": { "type": "extra credit",
                                             "score": 100 }
                                }
                     })
```

## Deleting Documents and Collections
```s
db.inspections.find({ "test": 1 }).pretty()
db.inspections.find({ "test": 3 }).pretty()
db.inspections.deleteMany({ "test": 1 })
db.inspections.deleteOne({ "test": 3 })
```