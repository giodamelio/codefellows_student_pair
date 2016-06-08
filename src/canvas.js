const request = require('request-promise');

class CanvasAPI {
  constructor(auth_key) {
    // Create a request instance with the auth header
    this.request = request.defaults({
      auth: {
        bearer: auth_key,
      },
    });
  }

  // Get a list of the current users courses
  getCourses() {
    return this.request({
      method: 'GET',
      url: 'https://canvas.instructure.com/api/v1/courses',
      json: true,
    });
  }

  // Get a list of the students from a course
  getStudents(course_id) {
    return this.request({
      method: 'GET',
      url: `https://canvas.instructure.com/api/v1/courses/${course_id}/users?enrollment_type=student`,
      json: true,
    });
  }
}

module.exports = CanvasAPI;
