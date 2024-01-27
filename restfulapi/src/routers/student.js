const express = require("express");
const router = new express.Router(); 

//define the router

router.get("/thapa", (req,res)=> {
    res.send("Hello whatsUp guys"); 
}); 

module.exports = router;