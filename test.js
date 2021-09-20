import { MongoClient } from 'mongodb';
// const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yiyle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    let db
    try {
        db = await client.connect();
        // console.log(db);
        // const database = client.db('sample_training');
        // const movies = database.collection('zips');
        // const collection = client.db("sample_training").collection("trips");
        // const query = {
        //     "tripduration": { "$lte": 70 },
        //     "usertype": "Customer"
        // };
        // const movie = await collection.findOne(query);
        // console.log(movie);
    } catch (err) {
        // Handle error
        console.log(err)
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    return db
}
// run().catch(console.dir);
export default run;