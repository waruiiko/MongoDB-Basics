const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m001-student:<m001-mongodb-basics>@sandbox.yiyle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log("1")

    const collection = client.db("test").collection("devices");
    console.log(collection)
    // perform actions on the collection object
    client.close();
    console.log("3")
});
console.log("nice")