import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
export class WordCardComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Input() word: string = 'Example';
  @Input() buttons: WordOption[] = [];

  selected = false;
  selectedIndex: number | null = null;

  ngOnInit() {
    setTimeout(() => this.next.emit());
  }
  reset() {
    this.selected = false;
  }

  selectOption(idx: number) {
    console.log(idx)
    this.selected = true;
    this.selectedIndex = idx;
  }

  getButtonColor(option: WordOption): string {
    if (!this.selected) return 'primary';
    return option.isCorrect ? 'primary' : 'warn';
  }
}