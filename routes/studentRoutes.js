// routes/studentRoutes.js
const express = require('express');
const Student = require('../models/student');
const Mentor = require('../models/mentor');

const router = express.Router();

// Create Student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Change Mentor for a Student
router.put('/:studentId/mentor', async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    const newMentor = await Mentor.findById(req.body.mentorId);
    
    if (!student.mentor.equals(newMentor._id)) {
      student.previousMentors.push(student.mentor);
      student.mentor = newMentor._id;
      await student.save();
    }
    
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get previously assigned Mentors for a Student
router.get('/:studentId/previous-mentors', async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('previousMentors');
    res.send(student.previousMentors);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
