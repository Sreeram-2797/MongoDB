var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/aravinddb";

MongoClient.connect(url, (err, db) => {
   if (err) throw err;
   console.log("Connection Created");
   db.close();
});