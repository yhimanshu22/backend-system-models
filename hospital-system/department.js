const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Add more fields as needed
}, { timestamps: true });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
