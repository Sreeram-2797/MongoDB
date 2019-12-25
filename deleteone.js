var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myquery = { Address: 'Murungapakkam' };
  dbo.collection("customers").deleteOne(myquery, (err, obj) => {
    if (err) throw err;
    console.log("One document deleted");
    db.close();
  });
});