const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Age: { type: Number, required: true },
    gender: { type: String, required: true },
    class : {type: mongoose.Schema.Types.ObjectId,
    ref:"class",
    required:true,
    
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;
