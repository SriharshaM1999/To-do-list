var express = require('express');

// import controller 
const home=require("../controllers/home");

var router = express.Router();
router.use(express.urlencoded());
console.log("done till here");



//linking the routes with the corresponding  functions  
router.get('/',home.home);

router.post('/new',home.add);

router.post('/delete',home.delete);

module.exports=router;