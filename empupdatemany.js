var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("aravinddb");
  var myquery = { Employee_Name: 'Prakash' };
  var newvalues = {$set: {Employee_Name: 'Velu'} };
  dbo.collection("Employee").updateOne(myquery, newvalues, (err, res) => {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});