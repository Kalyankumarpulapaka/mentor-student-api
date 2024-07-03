// routes/mentorRoutes.js
const express = require('express');
const Mentor = require('../models/mentor');
const Student = require('../models/student');

const router = express.Router();

// Create Mentor
router.post('/', async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Assign Students to Mentor
router.post('/:mentorId/students', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const studentIds = req.body.students;
    
    for (const studentId of studentIds) {
      const student = await Student.findById(studentId);
      if (student.mentor) {
        return res.status(400).send({ error: 'Some students already have a mentor' });
      }
      student.mentor = mentor._id;
      await student.save();
      mentor.students.push(student._id);
    }
    
    await mentor.save();
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all Students for a Mentor
router.get('/:mentorId/students', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId).populate('students');
    res.send(mentor.students);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
