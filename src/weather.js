//install npm init
//install npm install express
//this is just to taste if things are running ok
// console.log('hello this is running!!')
//this is used when trying to link pug or html to express
//your native modules shoud come before the third party modules
const path = require('path');
const express = require('express');
//then we create an app the calls express
const app = express();


//middleware
//these are functions that get called upone whenever theres an incoming request
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views','views')
app.set('view egine', 'hbs')



//route
//the '/' is the path and the (req,res) is the call back with two arguments
app.get('/',(req,res)=>{
    res.render('index');
});

//about route
app.get('/about',(req,res)=>{
    res.render('about')
});






//we always end with a server that listens to this http request
app.listen(3000, ()=>{
     console.log('The server is running optimally on port 3000!!')
})
