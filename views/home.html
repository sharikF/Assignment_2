const fs = require("fs"); // required at the top of your module

//globally declared 
var categories =[]
var posts =[]

//exported functions - initialize 

module.exports.initialize = function(){
    return new Promise(function(resolve, reject){
        fs.readFile("./data/posts.json", 'utf8', (err, data) =>{
            if (err) reject("unable to read file");
            posts = JSON.parse(data);
            resolve(data)
        })

        fs.readFile("./data/categories.json", 'utf8', (err, data) => {
            if (err) reject("unable to read file");
            categories = JSON.parse(data);
            resolve(data) 
        })
    })
}

module.exports.gePublishedPosts = function(){//Published_Posts
    return new Promise(function(resolve, reject){
        var publishPosts = []
        let i = 0
        do {
            if(posts[i].published === true){
                publishedPosts.push(posts[i])
            }
            i++
        } while (i!=posts.length)
        if(publishedPosts.length === 0) reject("no results returned")
        resolved(publishedPosts)
    })
}

module.exports.getAllPosts = function(){//All_Posts
    return new Promise(function(resolve, reject){
        if(posts.length === 0) reject("no results returned");
        resolve(posts)
    })
}

module.exports.getAllCategories = function() {//All_Categories
    return new Promise(function(resolve, reject){
        if(categories.length === 0) reject("no results returned");
        resolve(categories)
    })
}
