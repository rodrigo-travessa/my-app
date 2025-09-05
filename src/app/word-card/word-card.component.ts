import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent {
  word: string = 'Example';
  buttons: string[] = [
    'Option 1', 'Option 2',
    'Option 3', 'Option 4',
    'Option 5', 'Option 6'
  ];
}
