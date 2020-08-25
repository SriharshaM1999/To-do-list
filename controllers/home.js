
// including the mongoodeDb  and modals
const db=require('../config/mongoose');
const ToDo=require("../models/modal");

// code for general display  
module.exports.home=function(req,res){

    ToDo.find({},function(err,newTask){
        if(err){console.log("error in fetching the document");
    return;
}

res.render('display',
    {
        list:newTask
    });

    });
    
    
}
// code for adding a task
module.exports.add=function(req,res){
    
    ToDo.create({
        desc:req.body.desc,
        date:req.body.date,
        category:req.body.category
    },function(err,newTask){
        if(err){console.log("error in creating contact"); return;}
        console.log(newTask);
        res.redirect("back");
    })

}
// code for deleting the task
module.exports.delete=function(req,res){
 
   let id=req.body;

   console.log(id);

   let dd =id.id;

   ToDo.findByIdAndDelete(dd,function(err,task){
       console.log(dd);
       if(err){console.log("no data found"); 
       return;
    }
    if(!task){console.log("not found"); res.redirect("back");}
    else{console.log("found");res.redirect("back")};
   });
  
   
}