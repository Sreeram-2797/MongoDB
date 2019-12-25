var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) =>{
    if (err) throw err;
    var dbo = db.db("sreedb");
    dbo.createCollection("customers", (err,res) => {
    if (err) throw err;
    console.log("Collection Created.");
    db.close();
    });

});