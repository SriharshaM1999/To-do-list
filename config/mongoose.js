
//require the library
var mongoose=require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost/todo_list");

//acquire the connection
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,"There is a issue with connection"));


//up and running
db.once('open',function(){
    console.log("successfully linked up with db")
});