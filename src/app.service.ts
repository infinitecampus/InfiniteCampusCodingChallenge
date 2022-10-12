import { Injectable } from '@nestjs/common';
import { IAssignment, IScore, IStudent } from './app.model';

@Injectable()
export class AppService {
  private assignments: IAssignment[] = [
    {
      id: 1,
      name: 'Multiplication Worksheet',
      description: 'Fill out this worksheet, and be sure to show your work!',
      totalPoints: 100,
    },
    {
      id: 2,
      name: 'Division Quiz',
      description: 'Pop quiz time!',
      totalPoints: 10,
    },
    {
      id: 3,
      name: 'Pythagorean Theorem Essay',
      description:
        'Write a 1,000 word essay on the importance of the Pythagorean theorem in modern geometry',
      totalPoints: 50,
    },
  ];

  private students: IStudent[] = [
    {
      id: 1,
      firstName: 'Homer',
      lastName: 'Simpson',
    },
    {
      id: 2,
      firstName: 'Marge',
      lastName: 'Simpson',
    },
    {
      id: 3,
      firstName: 'Moe',
      lastName: 'Szyslak',
    },
    {
      id: 4,
      firstName: 'Barney',
      lastName: 'Gumble',
    },
    {
      id: 5,
      firstName: 'Seymour',
      lastName: 'Skinner',
    },
    {
      id: 6,
      firstName: 'Ned',
      lastName: 'Flanders',
    },
    {
      id: 7,
      firstName: 'Montgomery',
      lastName: 'Burns',
    },
  ];

  private scores: IScore[] = [
    {
      scoreID: 1,
      studentID: 1,
      assignmentID: 1,
      score: 70,
    },
    {
      scoreID: 2,
      studentID: 1,
      assignmentID: 2,
      score: 80,
    },
    {
      scoreID: 3,
      studentID: 2,
      assignmentID: 1,
      score: 30,
    },
    {
      scoreID: 4,
      studentID: 2,
      assignmentID: 2,
      score: 90,
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  public getAssignments(): IAssignment[] {
    return this.assignments;
  }

  getStudents(): IStudent[] {
    return this.students;
  }

  getScores(): IScore[] {
    return this.scores;
  }

  saveScores(scores: IScore[]): void {
    this.scores = scores;
  }
}
