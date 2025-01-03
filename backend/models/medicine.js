const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    medicineId: { type: String, required: true, unique: true },
    medicineName: { type: String, required: true },
    quantity: { type: Number, required: true },
    assignedDoctor: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', medicineSchema);