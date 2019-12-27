var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("aravinddb")
    var empdetails = [
     {Employee_Id : 100, Employee_Name: 'Sidharth', Salary : 10000},
     {Employee_Id : 101, Employee_Name: 'Aasim', Salary : 15500},
     {Employee_Id : 102, Employee_Name: 'Sriram', Salary : 5700},
     {Employee_Id : 103, Employee_Name: 'Brino', Salary : 12000},
     {Employee_Id : 104, Employee_Name: 'Ranjith', Salary : 20000},
     {Employee_Id : 105, Employee_Name: 'Prakash', Salary : 11000},
     {Employee_Id : 106, Employee_Name: 'Sundar', Salary : 8700},
     {Employee_Id : 107, Employee_Name: 'Arun', Salary : 9600},
     {Employee_Id : 108, Employee_Name: 'Xavier', Salary : 11200},
     {Employee_Id : 109, Employee_Name: 'Ram', Salary : 9900},
     {Employee_Id : 110, Employee_Name: 'Rishab', Salary : 14000}
    ];
    dbo.collection('Employee').insertMany(empdetails, (err, res) => {
       if (err) throw err;
       console.log("Employee Data Inserted :" +" " + res.insertedCount);
       db.close();
    });
});