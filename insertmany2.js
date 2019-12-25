var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myobj = [
    { _id: 141, name: 'Chocolate IceCream'},
    { _id: 142, name: 'Lemon Juice'},
    { _id: 143, name: 'Vanilla Shake'}
  ];
  dbo.collection("products").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});