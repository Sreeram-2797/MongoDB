var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("sreedb");
  var myobj = [
    { Name: 'Velmurugan', Address: 'Govindsalai'},
    { Name: 'Babu', Address: 'Velrampet'},
    { Name: 'Dhilip', Address: 'Reddiarpalayam'},
    { Name: 'Viswanathan', Address: 'Rainbow Nagar'},
    { Name: 'Shivaguru', Address: 'Indira Gandhi'},
    { Name: 'Sreeram', Address: 'Gundupalayam'},
    { Name: 'Vinoth', Address: 'Indhu nagar'},
    { Name: 'Puduvai', Address: 'Vandrapet'},    

  ];
  dbo.collection("regexp01").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});