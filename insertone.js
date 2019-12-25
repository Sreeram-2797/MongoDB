var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)  => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myobj = {Name: "Sreeram", Address: "Murungapakkam"};
  dbo.collection("customers").insertOne(myobj, (err, res) => {
    if (err) throw err;
    console.log("One document inserted");
    db.close();
  });
});