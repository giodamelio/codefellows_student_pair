const express = require('express');

const CanvasAPI = require('./canvas');

const canvas = new CanvasAPI(process.env.CANVAS_TOKEN);
const server = express();

server.get('/', function(req, res) {
  canvas.getCourses()
    .then(function(courses) {
      return Promise.all(courses.map(function(course) {
        return canvas.getStudents(course.id);
      }));
    })
    .then(function(students) {
      res.send(students);
    })
    .catch(function(error) {
      console.error(error);
      res.status(500);
      res.send({
        error: error.message,
      });
    });
});

const PORT = process.env.PORT || 3141;
server.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});

