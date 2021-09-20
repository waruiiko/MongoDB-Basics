const db = require('./test');
async function findDocuments (db) {
    // Get the documents collection
    const collection = client.db("sample_training").collection("trips");
  
    // Insert some documents
    const query = {
        "tripduration": { "$lte": 70 },
        "usertype": "Customer"
    };
    const movie = await collection.findOne(query);
    console.log(movie);
  
    return movie
  }