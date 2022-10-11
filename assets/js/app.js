import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

class GradeBookViewModel {
  assignments = [
    {
      id: 1,
      name: "Multiplication Worksheet"
    },
    {
      id: 2,
      name: "Division Quiz"
    }
  ];

  students = [
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

  scores = [
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

  gradeBookGridInfo = ko.pureComputed(function() {
    console.log("In here");

    const mappedAssignments = this.assignments.map(a => {
      a.scores = this.students.map(s => {
        return {
          score: this.scores.filter(score => score.assignmentID === a.id && score.studentID === s.id)[0]
        };
      });
      return a;
    });

    console.log(mappedAssignments);

    return mappedAssignments;

  }, this);

  getScore (assignmentID, studentID) {
    return this.scores.filter(s => s.assignmentID === assignmentID && s.studentID === studentID)[0];
  }
}

ko.applyBindings(new GradeBookViewModel());
