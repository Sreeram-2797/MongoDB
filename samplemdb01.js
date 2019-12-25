var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sreeramdb";

mongodb.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});