const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    specialization: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);