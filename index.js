// importing  express to use its methods/functions

var express=require('express');



var routes=require('./routes');
const port =8008;  // port number



// creating an express app
var app=express();

app.use('/',routes);  //use express router



// set up the view engine

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static("assets")); // inorder to use css
app.use(express.urlencoded()); 


// listening on the port 
app.listen(port, function(err){
    if(err){
        console.log("not possible to connect");
        return;
    }
    else{
        console.log(`listening on port, ${port}`);
    }

});