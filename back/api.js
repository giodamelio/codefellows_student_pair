const express = require('express');

const CanvasAPI = require('./canvas');

const canvas = new CanvasAPI(process.env.CANVAS_TOKEN);
const router = express.Router();

// List the courses a teacher/ta has access to
router.get('/courses', function(req, res) {
  canvas.getCourses()
    .then(function(courses) {
      res.send(courses);
    });
});

// List the students in a course a teacher/ta has access to
router.get('/courses/:id/students', function(req, res) {
  canvas.getStudents(req.params.id)
    .then(function(students) {
      res.send(students);
    });
});

module.exports = router;
