const express = require("express");

const bodyParser=require("body-parser");
const  mongoose = require("mongoose");
const PORT=3000;
const app=express();
const Mentor = require("./models/mentor");
const Student = require("./models/student");


const DB_URL="mongodb+srv://archanam794:Prajin%402018@cluster0.vio3b9p.mongodb.net/?retryWrites=true&w=majority";



app.use(bodyParser.json());
mongoose
.connect(DB_URL,{}).then(()=>console.log("db connected"))
.catch((err)=>console.log("db not connect",err));

app.post("/mentor", async (req, res) => {
    try {
      const mentor = new Mentor(req.body);
      await mentor.save();
      res.status(201).send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.post("/student", async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.post("/mentor/:mentorId/assign", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const students = await Student.find({ _id: { $in: req.body.students } });
  
      students.forEach((student) => {
        student.cMentor = mentor._id;
        student.save();
      });
  
      mentor.students = [
        ...mentor.students,
        ...students.map((student) => student._id),
      ];
      await mentor.save();
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const student = await Student.findById(req.params.studentId);
  
      if (student.cMentor) {
        student.pMentor.push(student.cMentor);
      }
  
      student.cMentor = mentor._id;
      await student.save();
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.get("/mentor/:mentorId/students", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId).populate(
        "students"
      );
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });  



app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
 });