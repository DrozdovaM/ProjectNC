const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

//      Json-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 3000;

app.use(cors());
app.options('*',cors);

mongoose.connect("mongodb://localhost:27017/studentsbd", { useNewUrlParser: true }, function(err){
  if(err){
    return console.log(err);
  }

  app.listen(port, function(){
    console.log(`Server started on port ${port}`);
  })
});

const addStudent = require("./routes/add-student");
const getStudents = require("./routes/get-students");
const lookAll = require("./routes/look-all-students");
const deleteStudent = require("./routes/delete.student");
const editStudent = require("./routes/edit-student");
const infoAboutStudent = require("./routes/info-about-student");

app.use("/addstudent", addStudent.router);
app.use("/getstudents", getStudents.router);
app.use("/lookall", lookAll.router);
app.use("/deletestudent", deleteStudent.router);
app.use("/editstudent", editStudent.router);
app.use("/infoaboutstudent", infoAboutStudent.router);

process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});