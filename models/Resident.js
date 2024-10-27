const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  apartmentNumber: { type: Number, required: true },
  phoneNumber: { type: String, required: true }
});

module.exports = mongoose.model('Resident', residentSchema);
