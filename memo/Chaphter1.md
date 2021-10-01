# Chapter 1: What is MongoDB?
## What is the MongoDB Database?
* Database: a structured way to store and access data.  

## What is a Document in MongoDB?
* Document - a way to organize and store data as a set of field-value pairs.
* Field - a unique identifier for a datapoint.

* Value - data related to a given identifier.

* Collection - an organized store of documents in MongoDB, usually with common fields between documents. There can be many collections per database and many documents per collection.

## What is MongoDB Atlas?
* Replica Set - a few connected machines that store the same data to ensure that if something happens to one of the machines the data will remain intact. Comes from the word replicate - to copy something.

* Instance - a single machine locally or in the cloud, running a certain software, in our case it is the MongoDB database.

* Cluster - group of servers that store your data.

  ```
  ### Lab: Create and Deploy an Atlas Cluster
  Lab: Create and Deploy an Atlas Cluster
  https://cloud.mongodb.com/v2/613ee996c0e0901d498ee504#clusters
  
  Create a Database User
    * username: m001-student
    * password: m001-mongodb-basics

    mongo "mongodb+srv://m001-student:m001-mongodb-basics@<cluster>.mongodb.net/admin"
    mongo "mongodb+srv://sandbox.yiyle.mongodb.net/myFirstDatabase" --username m001-student

  ```
