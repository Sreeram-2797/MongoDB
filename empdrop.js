var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("aravinddb");
  var query = {Employee_Name: 'Vishal'};
  dbo.collection("Employee").drop(query,(err, delOK) => {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});