import { MongoClient } from 'mongodb';
// const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yiyle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(dbs, collections) {
    try {
        await client.connect();
        // console.log(db);
        // const database = client.db('sample_training');
        // const movies = database.collection('zips');
        const collection = client.db(dbs).collection(collections);
        const query = {
            // "birth year": { "$eq": 1998 }

            //人口大于5000小于1000000
            // "$nor": [{ "pop": { "$lt": 5000 } }, { "pop": { "$gt": 1000000 } }]

            //either founded in 2004
            // [and] either have the social category_code [or] web category_code,
            // [or] were founded in the month of October    
            // [and] also either have the social category_code [or] web category_code?
            // "$or": [
            //     {
            //         "$and": [{ "founded_year": 2004 }, {
            //             "$or": [{ "category_code": "social" },
            //             { "category_code": "web" }]
            //         }]
            //     },
            //     {
            //         "$and": [{ "founded_month": 10 }, {
            //             "$or": [{ "category_code": "social" },
            //             { "category_code": "web" }]
            //         }]
            //     },
            // ]

            //条件查询
            // "$expr": { "$eq": ["$end station id", "$start station id"] }

            // "$expr": {
            //     "$and": [{ "$gt": ["$tripduration", 1200] },
            //     { "$eq": ["$end station id", "$start station id"] }
            //     ]
            // }

            //How many companies in the sample_training.companies collection have the same permalink as their twitter_username?
            // "$expr": { "$eq": ["$permalink", "$twitter_username"] }

            //Find all documents with exactly 20 amenities which include all the amenities listed in the query array:
            // "amenities": {
            //     "$size": 20,
            //     "$all": [ "Internet", "Wifi",  "Kitchen",
            //              "Heating", "Family/kid friendly",
            //              "Washer", "Dryer", "Essentials",
            //              "Shampoo", "Hangers",
            //              "Hair dryer", "Iron",
            //              "Laptop friendly workspace" ]
            // }

            //Using the sample_airbnb.listingsAndReviews collection find out how many documents have the "property_type" "House", and include "Changing table" as one of the "amenities"?
            // "$and": [
            //     {
            //         "amenities": {
            //             "$all":["Changing table"]
            //         }
            //     },
            //     {
            //         "property_type":"House"
            //     }
            // ]

            //OR
            // "property_type": "House","amenities": "Changing table"

            // How many companies in the sample_training.companies collection have offices in the city of Seattle?
            // "offices":{"$elemMatch":{"city":"Seattle"}}

            // Which of the following queries will return only the names of companies from the sample_training.companies collection that had exactly 8 funding rounds?
            // {"funding_rounds":{"$size": 8}},{"name":1,"_id":0}

            //How many trips in the sample_training.trips collection started at stations that are to the west of the -74 longitude coordinate?
            // "start station location.coordinates.0":{"$lt":-74}

            // How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?
            // "address.city":"NEW YORK"

            // Which of the following queries will return the names and addresses of all listings from the sample_airbnb.listingsAndReviews collection where the first amenity in the list is "Internet"?
            // {"amenities.0":"Internet"},{"name":1,"address":1}

            //What room types are present in the sample_airbnb.listingsAndReviews collection?
            // [
            //     { "$project": { "room_type": 1, "_id": 0 } },
            //     {
            //         "$group": {
            //             "_id": "$room_type",
            //             "count": { "$sum": 1 }
            //         }
            //     }
            // ]
        }
        // const movie = await collection.aggregate([{"$project":{"room_type":1,"_id":0}},{"$group": {           "_id":"$room_type","count":{"$sum":1}}}]);
        const movie = await collection.find(query).count();
        console.log(movie);
    } catch (err) {
        // Handle error
        console.log("err", err)
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
// run().catch(console.dir);
export default run;