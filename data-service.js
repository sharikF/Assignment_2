const fs = require("fs"); // required at the top of your module

//globally declared  
var employees =[]
var departments =[]

//exported functions - initialize 

module.exports.initialize = function(){
    return new Promise(function(resolve, reject){
        fs.readFile("./data/departments.json", 'utf8', (err, data) =>{
            if (err) reject("unable to read file");
            departments = JSON.parse(data);
            resolve(data)
        })

        fs.readFile("./data/employees.json", 'utf8', (err, data) => {
            if (err) reject("unable to read file");
            employees = JSON.parse(data);
            resolve(data) 
        })
    })
}

module.exports.getPublishedemployee = function(){//Published_departments
    return new Promise(function(resolve, reject){
        var getPublishedemployees = []
        let i = 0
        do {
            if(employees[i].published === true){
                getPublishedemployees.push(employees[i])
            }
            i++
        } while (i!=departments.length)
        if(publishdepartments.length === 0) reject("no results returned")
        resolve(publishdepartments)
    })
}

module.exports.getAlldepartments = function(){//All_departments
    return new Promise(function(resolve, reject){
        if(departments.length === 0) reject("no results returned");
        resolve(departments)
    })
}

module.exports.getAllEmployees = function() {//All_employees
    return new Promise(function(resolve, reject){
        if(employees.length === 0) reject("no results returned");
        resolve(employees)
    })
}
