import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export interface WordOption {
  label: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-word-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent {
  @Output() next = new EventEmitter<void>();
  @Output() score = new EventEmitter<void>();
  @Input() word: string = 'Example';
  @Input() buttons: WordOption[] = [];

  selected = false;
  selectedIndex: number | null = null;

  reset() {
    this.selected = false;
  }

  selectOption(idx: number) {
    if(this.buttons[idx].isCorrect) {
      this.score.emit();
    }
    this.selected = true;
    this.selectedIndex = idx;
  }

  getButtonColor(option: WordOption): string {
    if (!this.selected) return 'primary';
    return option.isCorrect ? 'primary' : 'warn';
  }
}