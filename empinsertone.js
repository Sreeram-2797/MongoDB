var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
     var dbo = db.db("aravinddb");
     var query = { Employee_id: 111,Employee_Name: "Vishal",Salary: 11100};
    dbo.collection('Employee').insertOne(query,(err,res) => {
        if (err) throw err;
        console.log(res.insertedCount);
    });
});