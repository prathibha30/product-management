var express=require('express');

var app=express();
const axios = require('axios');



const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Frontend/'));

const sqlite3 = require('sqlite3')


const db =new sqlite3.Database('Product_Management.db',(err) => {
    if (err) {
        console.error('Unable to connect to DB: ' + err.message);
    }

    console.log('Connected to DB');
    db.all('PRAGMA foreign_keys = ON',(err,data)=>{
        console.log(err,data)
    })
})



// const ExecuteQuery = require('./Backend/database')


app.get('/', function(req, res) {
    res.sendFile(__dirname+'/Frontend/html/index.html');

});


app.post('/api/execute', function(req, res) {
    const query = req.body.query
    console.log(query)
    db.all(query,(err,data) => {
        console.log(err,data)
        res.send({err:err,data:data})
    })
});



app.listen(process.env.PORT || 3000,() => {
    console.log('listening on http://localhost:3000')
})

