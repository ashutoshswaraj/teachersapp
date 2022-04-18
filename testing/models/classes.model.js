const mongoose = require("mongoose")

const classSchema = new mongoose.Schema(
    {
        grade:{type:Number,required:true},
        section:{type:String,required:true},
        subject:{type:String,required:true}
    },
    {
        versionKey:false,
        timestamps:true,

    }
);

const Class = mongoose.model("class" , classSchema)

module.exports = Class;