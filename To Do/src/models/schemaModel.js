const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    // unique:false
    type: String,
    require: true,
    default: "pending"
  }
})


const taskModel = new mongoose.model('Task', taskSchema);

module.exports = {
  model: taskModel,
  schema: taskSchema
};