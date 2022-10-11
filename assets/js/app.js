import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

document.addEventListener('alpine:init', () => {

  const assignments = [
      {
        id: 1,
        name: "Multiplication Worksheet"
      },
      {
        id: 2,
        name: "Division Quiz"
      }
  ];

  const students = [
    {
      id: 1,
      firstName: "Bert",
      lastName: "Sesame",
      scores: [
        {

        }
      ] 
    },
    {
      id: 2,
      firstName: "Ernie",
      lastName: "Sesame",
      scores: []
    }
  ];

  const scores = [
    {
      studentID: 1,
      assignmentID: 1,
      score: 70
    },
    {
      studentID: 1,
      assignmentID: 2,
      score: 80
    },
    {
      studentID: 2,
      assignmentID: 1,
      score: 30
    },
    {
      studentID: 2,
      assignmentID: 2,
      score: 90
    },
  ];

  Alpine.data("gradebook", () => ({
    assignments: assignments,
    students: students,
    scores: scores,
    getScore: (assignmentID, studentID) => {
      return scores.filter(s => s.assignmentID === assignmentID && s.studentID === studentID)[0];
    }
  }));
});
