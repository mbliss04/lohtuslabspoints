var express = require('express');
var app = express();
var util = require('util');

var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var MONGOLAB_URI = "mongodb://heroku_app28918692:6bspp11s0ad6rbbfb1u407jl2p@ds051848.mongolab.com:51848/heroku_app28918692";

app.use(express.static('app'));
app.set('views', (__dirname, 'app/views'));
app.set('view engine', 'jade');

app.get('/teams', function(req, res){
    MongoClient.connect(MONGOLAB_URI, function(err, db) {
        if(err) throw err;
        var collection = db.collection('teams');
        // Locate all the entries using find
        collection.find().toArray(function(err, results) {
            console.dir(results);
            res.json(results);
            db.close();
        });
    });
});

app.get('/', function(req, res){
    res.render('index');
});

app.put('/updatescore', function(req, res){
    console.log('hello ' + util.inspect(req))
    // MongoClient.connect(MONGOLAB_URI, function(err, db) {
    //     if(err) throw err;
    //     var collection = db.collection('teams');
    //     collection.update(req.body.team)
    // });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});