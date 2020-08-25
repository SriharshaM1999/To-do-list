//require the library

var mongoose=require("mongoose");


// creating the schema for the data base
var todoSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
}
);

const  ToDo=mongoose.model("ToDo",todoSchema);

module.exports=ToDo;