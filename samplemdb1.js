var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

//Create a database named "mydb":
var url = "mongodb://localhost:27017/sreeramdb";

MongoClient.connect(url, function(err, dbs) {
  if (err) throw err;
    console.log("Database connected!");
    var dbo = dbs.db("sreeramdb");

    function _mongodbCallBack(err, res){
        if (err) throw err;
        console.log("Operation Success!!!");
        //console.log(res);
    }

    function mongodbCallBack(err, res){
        if (err) throw err;
        console.log("Operation Success!!!");
        console.log(res);
    }

    //User Collection
    dbo.createCollection("users", _mongodbCallBack);

    //Employee Collection
    dbo.createCollection("employees", _mongodbCallBack);

    var userObj = { username: "Sreeram", password: "Password" };
    dbo.collection("users").insertOne(userObj, _mongodbCallBack);

    var userObj = { username: "Kachi", password: "Password" };
    dbo.collection("users").insertOne(userObj, _mongodbCallBack);

    var userObj = { username: "User3", password: "Password" };
    dbo.collection("users").insertOne(userObj, _mongodbCallBack);
    

    var empObj = { name: "E1", salary: 10000 };
    dbo.collection("employees").insertOne(empObj, _mongodbCallBack);

    empObj = { name: "E2", salary: 20000 };
    dbo.collection("employees").insertOne(empObj, _mongodbCallBack);

    dbo.collection("users").find({}).toArray(mongodbCallBack);
   
    const objId = new ObjectId('5e01b21d0fd27c3b2b065486');
    dbo.collection("employees").findOne({_id: objId}, mongodbCallBack);
    dbo.collection("employees").findOne({name: 'E2'}, mongodbCallBack);
    
    var obj = {_id: objId};
    var search2 = {name : 'E2'};
    var newObj = { $set: { contact: '9841475153'}};
    //dbo.collection("employees").updateOne( obj, newObj, _mongodbCallBack);
    //dbo.collection("employees").update( search2, newObj, _mongodbCallBack);
    dbo.collection("employees").deleteOne(obj, _mongodbCallBack);

});