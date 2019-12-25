var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myquery = { Address: /^M/ };
  dbo.collection("customers").deleteMany(myquery, (err, obj) => {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});