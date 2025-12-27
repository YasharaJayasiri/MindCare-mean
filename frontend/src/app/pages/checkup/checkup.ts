import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkup.html',
  styleUrls: ['./checkup.css'],
})
export class Checkup {

  questions = [
    'Feeling nervous, anxious, or on edge',
    'Not being able to stop or control worrying',
    'Worrying too much about different things',
    'Trouble relaxing',
    'Being so restless that it is hard to sit still',
    'Becoming easily annoyed or irritable',
    'Feeling afraid, as if something awful might happen'
  ];

  options = [
    { label: 'Not at all', value: 0 },
    { label: 'Several days', value: 1 },
    { label: 'More than half the days', value: 2 },
    { label: 'Nearly every day', value: 3 }
  ];

  answers: number[] = new Array(7).fill(0);

  totalScore: number | null = null;
  anxietyLevel = '';

  calculateScore() {
    this.totalScore = this.answers.reduce((sum, val) => sum + val, 0);

    if (this.totalScore <= 4) {
      this.anxietyLevel = 'Minimal anxiety';
    } else if (this.totalScore <= 9) {
      this.anxietyLevel = 'Mild anxiety';
    } else if (this.totalScore <= 14) {
      this.anxietyLevel = 'Moderate anxiety';
    } else {
      this.anxietyLevel = 'Severe anxiety';
    }
  }
}
