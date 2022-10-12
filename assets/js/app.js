import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

document.addEventListener('alpine:init', () => {

  Alpine.data("gradebook", () => ({
    init() {
      fetch("/api/students").then(res => res.json()).then(data => this.students = data);
      fetch("/api/assignments").then(res => res.json()).then(data => this.assignments = data);
      fetch("/api/scores").then(res => res.json()).then(data => this.scores = data);
    },
    students: [],
    assignments: [],
    scores: [],
    selectedAssignment: {name: ""},
    selectAssignment(assignment) {
      this.selectedAssignment = assignment;
      $("#assignmentDetails").modal("show");
    },
    getScore(assignmentID, studentID) {
      const matchingScores = this.scores.filter(s => s.assignmentID === assignmentID && s.studentID === studentID);
      if(!!matchingScores && matchingScores.length > 0) {
        return matchingScores[0].score;
      }

      return null;
    },
    scoreChanged(assignmentID, studentID, event) {

      const score = parseInt(event.target.value);

      // Find the corresponding score for this assignmentID and studentID
      const scoreIndex = this.scores.findIndex(s => s.assignmentID === assignmentID && s.studentID === studentID);

      if (scoreIndex > -1) {
        // If the score already exists, update it in the array
        this.scores[scoreIndex] = { ...this.scores[scoreIndex], score: parseInt(event.target.value) };
      } else {
        // If the score doesn't exist, add a new score onto the array
        this.scores.push({
          assignmentID,
          studentID,
          score
        })
      }
    },
    save() {
      console.log("Saving");
      fetch('/api/scores', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.scores)
      }).then(() => {
        toastr.success("Scores have been saved!");
      });
    }
  }));
});
