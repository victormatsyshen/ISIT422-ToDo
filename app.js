const express = require('express');

// express app
const app = express();

//listen for requests 
app.listen(3000);

app.get('/', (req, res) => {

    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });

});

app.get('/Dylan', (req, res) => {

    //res.send('<p>dylan's page</p>');
    res.sendFile('./views/dylan.html', { root: __dirname });

});

app.get('/Victor', (req, res) => {

    //res.send('<p>dylan's page</p>');
    res.sendFile('./views/victor.html', { root: __dirname });

});

app.get('/Stephanie', (req, res) => {

    //res.send('<p>stephanie's page</p>');
    res.sendFile('./views/stephanie.html', { root: __dirname });

});

app.get('/about', (req, res) => {

    //res.send('<p>about page</p>');

});