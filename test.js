import { MongoClient } from 'mongodb';
// const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yiyle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        // console.log(db);
        // const database = client.db('sample_training');
        // const movies = database.collection('zips');
        const collection =client.db("sample_training").collection("zips");
        const query = {
            // "birth year": { "$eq": 1998 }

            //人口大于5000小于1000000
            "$nor":[{"pop":{"$lt":5000}},{"pop":{"$gt":1000000}}]
        };
        const movie = await collection.find(query).count()
        console.log(movie);
    } catch (err) {
        // Handle error
        console.log("err",err)
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
// run().catch(console.dir);
export default run;