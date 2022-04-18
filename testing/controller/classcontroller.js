const express = require("express");

const Class = require("../models/classes.model")

const router = express.Router()

router.post("/class",async(req,res)=>{
    try{
        const classes = await Class.create(req.body);
        return res.status(201).send(classes);
    }catch(err){
res.send(500).send(err.message);
    } 
})

module.exports = router