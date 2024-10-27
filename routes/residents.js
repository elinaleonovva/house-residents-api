const express = require('express');
const router = express.Router();
const Resident = require('../models/Resident');

// Получение списка жильцов
router.get('/', async (req, res) => {
  try {
    const residents = await Resident.find();
    res.json(residents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Добавление нового жильца
router.post('/', async (req, res) => {
  const resident = new Resident({
    name: req.body.name,
    apartmentNumber: req.body.apartmentNumber,
    phoneNumber: req.body.phoneNumber
  });

  try {
    const newResident = await resident.save();
    res.status(201).json(newResident);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Удаление жильца по ID
router.delete('/:id', async (req, res) => {
    try {
        const resident = await Resident.findByIdAndDelete(req.params.id);

        if (!resident) {
            return res.status(404).json({ message: 'Resident not found' });
        }

        res.json({ message: 'Resident deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;