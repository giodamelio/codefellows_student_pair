const CanvasAPI = require('./canvas');

const canvas = new CanvasAPI(process.env.CANVAS_TOKEN);

canvas.getCourses()
  .then(function(courses) {
    return Promise.all(courses.map(function(course) {
      return canvas.getStudents(course.id);
    }));
  })
  .then(function(students) {
    console.log(students);
  });
