var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myquery = { Address: /^G/ };
  var newvalues = {$set: {Name: "Velu"} };
  dbo.collection("customers").updateMany(myquery, newvalues, (err, res) => {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});