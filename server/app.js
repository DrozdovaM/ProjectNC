// Подключение фреймворка  express 
const express = require('express');
const app = express();
// Подключение библиотеки cors для того, чтобы можно было обращаться к серверу с внешних адресов
const cors = require('cors');
 // Подключение инструмента для работы с БД (MongoDB)
const mongoose = require("mongoose");

//      Json-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Порт, на котором будет работать сервер
const port = 3000;

// Разрешаем доступ со всех адресов
app.use(cors());
app.options('*',cors);

// Подключение ДБ через модуль mongoose ( порт 27017) 
mongoose.connect("mongodb://localhost:27017/studentsbd", { useNewUrlParser: true }, function(err){
  if(err){
    return console.log(err);
  }
 
  // Запуск сервера 
  app.listen(port, function(){
    console.log(`Server started on port ${port}`);
  })
});

// Запросы
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


// Остановка работы сервера
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});