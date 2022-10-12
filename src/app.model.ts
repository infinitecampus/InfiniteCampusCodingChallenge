export interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IAssignment {
  id: number;
  name: string;
  description: string;
  totalPoints: number;
}

export interface IScore {
  scoreID: number;
  studentID: number;
  assignmentID: number;
  score: number;
}
