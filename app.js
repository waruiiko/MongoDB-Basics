const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yiyle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     console.log("1")
//     const collection = client.db("sample_mflix").collection("movies");
//     // console.log(collection)
//     // perform actions on the collection object
//     const query = { title: 'Back to the Future' };
//     const movie = collection.findOne(query);
//     console.log(movie);
//     client.close();
//     console.log("3")
// });

async function run() {
    try {
        await client.connect();
        // const database = client.db('sample_training');
        // const movies = database.collection('zips');
        const collection = client.db("sample_training").collection("zips");
        // Query for a movie that has the title 'Back to the Future'
        const query = { city: 'ALPINE' };
        const movie = await collection.findOne(query);
        console.log(movie);
        // await client.connect(err => {
        //     console.log("1")
        //     // const collection = client.db("test").collection("devices");
        //     const collection = client.db("sample_training").collection("zips");
        //     // console.log(collection)
        //     // perform actions on the collection object
        //     const query = { city: 'ALPINE' };
        //     const movie = collection.findOne(query);
        //     console.log(movie);
        //     client.close();
        //     console.log("3")
        // });
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
console.log("nice")