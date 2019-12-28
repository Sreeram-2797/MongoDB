var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("EmployeeDB")
    var empdetails = [
     {Employee_Id : 1001, Employee_Name: 'Sidharth', Salary : 10000},
     {Employee_Id : 1002, Employee_Name: 'Bruno', Salary : 15500},
     {Employee_Id : 1003, Employee_Name: 'Sriram', Salary : 5700},
     {Employee_Id : 1004, Employee_Name: 'Brino', Salary : 12000},
     {Employee_Id : 1005, Employee_Name: 'Riyaz', Salary : 20000},
     {Employee_Id : 1006, Employee_Name: 'Sreeram', Salary : 11000},
     {Employee_Id : 1007, Employee_Name: 'Sundar', Salary : 8700},
     {Employee_Id : 1008, Employee_Name: 'Subhash', Salary : 9600},
     {Employee_Id : 1009, Employee_Name: 'Xavier', Salary : 11200},
     {Employee_Id : 1010, Employee_Name: 'Xandy', Salary : 9900},
     {Employee_Id : 1011, Employee_Name: 'Rishab', Salary : 14000},
     {Employee_Id : 1012, Employee_Name: 'Sindhu', Salary : 19000}
    ];
    dbo.collection('Employee').insertMany(empdetails, (err, res) => {
       if (err) throw err;
       console.log("Employee Data Inserted :" +" " + res.insertedCount);
       db.close();
    });
});