var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myobj = [
    { Name: 'Sreeram', Address: 'Murungapakkam'},
    { Name: 'Ashwin', Address: 'Marapalam'},
    { Name: 'Arjun', Address: 'Govindsalai'},
    { Name: 'Aravind', Address: 'Sarem'},
    { Name: 'Raam', Address: 'Rainbow Nagar'},
    { Name: 'Muthuvel', Address: 'Lawspet'},
  ];
  dbo.collection("customers").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});