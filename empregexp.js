var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("aravinddb");
var query = {Employee_Name: /^S/ };
    dbo.collection('Employee').find(query).toArray((err, res) => {
       if (err) throw err;
       console.log(res.result);
       db.close();
    });
});