const express = require('express');
const router = express.Router();
const Medicine = require('../models/medicine');

router.post('/medicines', async (req, res) => {
    const medicine = new Medicine({
        medicineId: req.body.medicineId,
        medicineName: req.body.medicineName,
        quantity: req.body.quantity,
        assignedDoctor: req.body.assignedDoctor,
        price: req.body.price
    });

    try {
        const newMedicine = await medicine.save();
        res.status(201).json(newMedicine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/medicines', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/medicines/:id', async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (medicine) {
            Object.assign(medicine, req.body);
            const updatedMedicine = await medicine.save();
            res.json(updatedMedicine);
        } else {
            res.status(404).json({ message: 'Medicine not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/medicines/:id', async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (medicine) {
            await medicine.remove();
            res.json({ message: 'Medicine deleted' });
        } else {
            res.status(404).json({ message: 'Medicine not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});