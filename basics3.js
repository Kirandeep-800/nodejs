var express = require('express');
const app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'userdata'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected!!");

    var email = "ab@ab.com";
    var password = "root1";

    var insertcmd = "INSERT INTO login_info (email,password) values (?,?)";
    var values = [email,password];
  
    connection.query(insertcmd,values,function(err,result){
        if(err)throw err;
        console.log("1 entry recorded.");
    });
});

var server = app.listen(3000,()=>{
    console.log("server running at http://localhost:3000");
});