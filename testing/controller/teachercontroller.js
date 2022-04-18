const express = require("express")
const Teacher = require("../models/teacher.model")

const router = express.Router()

router.post("/teacher", async(req,res)=>{
    try{
        const teacher = await Teacher.create(req.body);
        return res.status(201).send(teacher);
    }catch(err){
        return res.send(500).send(err.message);
    }
})

router.get("/teacherdetail",async(req,res)=>{
    try{
        const teacher = await Teacher.find()
        .populate({path:"class"}).lean().exec();
        return res.status(200).send(teacher)
    }catch(err){
        return res.status(500).send(err.message)
    }
})



module.exports = router