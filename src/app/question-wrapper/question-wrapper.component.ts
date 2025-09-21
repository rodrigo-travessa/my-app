import { Component, ViewChild } from '@angular/core';
import { WordCardComponent, WordOption } from '../word-card/word-card.component';
import { DICTIONARY } from '../common/dictionary'

@Component({
  selector: 'app-question-wrapper',
  imports: [WordCardComponent],
  templateUrl: './question-wrapper.component.html',
  styleUrl: './question-wrapper.component.scss'
})
export class QuestionWrapperComponent {
  dictionary = DICTIONARY;
  currentWord: string = '';
  options: WordOption[] = [];

  @ViewChild('wordCard') wordCardComponent!: WordCardComponent;

   pickWordAndOptions() {
    this.wordCardComponent?.reset();
    // Get all keys
    const keys = Object.keys(this.dictionary);
    if (keys.length < 6) return; // Not enough words

    // Pick and remove a random word
    const randomIndex = Math.floor(Math.random() * keys.length);
    const pickedKey = keys[randomIndex];
    const pickedValue = this.dictionary[pickedKey];
    delete this.dictionary[pickedKey];

    // Pick 5 other random words (without removing)
    const otherKeys = keys.filter((k, i) => i !== randomIndex);
    const shuffled = otherKeys.sort(() => 0.5 - Math.random());
    const distractors = shuffled.slice(0, 5).map(key => ({
      label: this.dictionary[key],
      isCorrect: false
    }));

    // Prepare options and shuffle
    const allOptions: WordOption[] = [
      { label: pickedValue, isCorrect: true },
      ...distractors
    ].sort(() => 0.5 - Math.random());

    this.currentWord = pickedKey;
    this.options = allOptions;
  }
}
