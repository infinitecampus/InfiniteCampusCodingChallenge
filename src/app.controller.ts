import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { IAssignment, IScore, IStudent } from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomePage(@Res() res: Response): void {
    console.log('Here');
    res.sendFile('index.html', {
      root: './assets',
    });
  }

  @Get('/students')
  getStudents(): IStudent[] {
    return this.appService.getStudents();
  }

  @Get('/assignments')
  getAssignments(): IAssignment[] {
    return this.appService.getAssignments();
  }

  @Get('/scores')
  getScores(): IScore[] {
    return this.appService.getScores();
  }

  @Post('/scores')
  saveScores(@Body() scores: IScore[]): IScore[] {
    this.appService.saveScores(scores);
    return scores;
  }
}
