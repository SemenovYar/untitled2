const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');
const db = require('./db');
const musicBandController = require('./controllers/musicBand');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req,res) {
    res.send("Hello API");
});
app.get('/musicBand', musicBandController.all);
app.get('/musicBand/:id', musicBandController.findById);

app.post('/musicBand', musicBandController.create);

app.put('/musicBand/:id', musicBandController.update);

app.delete('/musicBand/:id', musicBandController.delete);


db.connect('mongodb://localhost:27017/myapi', function (err) {
    if (err){
        return console.log(err);
    }
    app.listen(2121,function () {
        console.log('API app started');
    });
});