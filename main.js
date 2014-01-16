var express = require('express');
var mongojs = require('mongojs');

var db = mongojs('test');
var db_posts = db.collection('posts');
var ObjectId = mongojs.ObjectId;

var app = express();


//get a list of blog posts
app.get('/posts', function (req, res) {
    var posts = db_posts.find(function (err, docs) {
        res.send(docs);
    });

});


//get a specific blog post
app.get('/posts/:post_id', function (req, res) {
    var query = {
        "_id": ObjectId(req.params.post_id)
    }
    db_posts.find(query, function (err, doc) {
        res.send(doc);
    });
});


//create a new post
app.post('/posts', function (req, res) {

});



app.listen(3000);
console.log('Listening on port 3000');