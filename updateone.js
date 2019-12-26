var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myquery = { Address: "Murungapakkam" };
  var newvalues = { $set: {Name: "Raja", Address: "Muthaliarpet" } };
  dbo.collection("customers").updateOne(myquery, newvalues, (err, res) => {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
