const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentScheme = new Schema ({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    birthDay: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    },
  });

  module.exports = mongoose.model('Student', StudentScheme);