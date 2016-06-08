const express = require('express');

const CanvasAPI = require('./canvas');

const canvas = new CanvasAPI(process.env.CANVAS_TOKEN);
const server = express();

// List the courses a teacher/ta has access to
server.get('/api/courses', function(req, res) {
  canvas.getCourses()
    .then(function(courses) {
      res.send(courses);
    });
});

// List the students in a course a teacher/ta has access to
server.get('/api/courses/:id/students', function(req, res) {
  canvas.getStudents(req.params.id)
    .then(function(students) {
      res.send(students);
    });
});

// Handle errors
server.use(function(err, req, res, next) {
  if (!err) return next();

  console.error(err.stack);
  res.status(500);
  res.send({
    error: err,
  });
});

const PORT = process.env.PORT || 3141;
server.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});

