const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const port = process.env.PORT || 2999;

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
});

//liste des topics disponibles
app.get('/test', function(req, res) {
    res.send("Hello World");
});

//Nouveau message dans le topic :id
app.post('/testPost', function(req, res) {
    console.log("oui")
    console.log(req.body.testId)
    res.send("Hello : " + req.query.testId)
});

app.listen(port, "192.168.43.224",  () => console.log(`App listening on 192.168.43.224:${port}`));