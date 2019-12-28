var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("EmployeeDB");
  var empsort = { Salary : -1 };
  dbo.collection('Employee').find().sort(empsort).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});