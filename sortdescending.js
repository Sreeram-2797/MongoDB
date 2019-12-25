var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var mysort = { Name: -1 };
  dbo.collection("customers").find().sort(mysort).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});