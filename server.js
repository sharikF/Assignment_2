/*************************************************************************
* BTI325– Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy. No part * of this assignment has been copied manually or electronically from any
other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Sharik Farrukh Student ID: 144624210 Date: October 11,2022
*
* Your app’s URL (from Cyclic) : ______________________________________________
*
*************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var path = require("path");
const res = require("express/lib/response")
var express = require("express"); 
var dataService = require ('./data-service.js')
var app = express(); 




app.use(express.static("public"));//Static Route


app.get("/", (req, res) => {//Redirect Route
    res.redirect('/about');
});

var dataService = require('./data-service.js') //Manager Service
const { rmSync } = require("fs")


app.get("/about", (req,res) => {//About
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/managers", (req,res) =>{ //Manager
    dataService.getAllEmployees().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({message: err});
    })
});

app.get("/employee", (req,res) => { //Employee
    dataService.getAllEmployees().then((data) => {
        res.json(data);
     }).catch((err) => {
        res.json({message: err});
     })
});

app.use((req,res) => {//Error
    res.status(404).send("Page Not Found");
});

dataService.initialize().then(() =>{
    app.listen(HTTP_PORT, () => {
        console.log('Express HTTP server is listening to the port', HTTP_PORT)
    })
}).catch(() => {
    console.log('Error: Server not started')
})


app.get("/departments", (req,res) =>{//departments
    dataService.getAlldepartments().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({message: err});
    })
});



