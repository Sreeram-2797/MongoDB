var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("EmployeeDB")
    dbo.collection('Employee').find({Salary : 10000}).toArray((err, result) => {
       if (err) throw err;
       console.log(result);
       db.close();
    });
});