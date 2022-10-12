export interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IAssignment {
  id: number;
  name: string;
}

export interface IScore {
  scoreID: number;
  studentID: number;
  assignmentID: number;
  score: number;
}
