import { Component, ViewChild, Input , OnInit} from '@angular/core';
import { WordCardComponent, WordOption } from '../word-card/word-card.component';

@Component({
  selector: 'app-question-wrapper',
  imports: [WordCardComponent],
  templateUrl: './question-wrapper.component.html',
  styleUrl: './question-wrapper.component.scss'
})
export class QuestionWrapperComponent implements OnInit {

  @Input() Dictionary:any;
  currentWord: string = '';
  options: WordOption[] = [];
  totalWords = 0;
  currentIndex = 0;
  rightAnswers = 0;
  questionsAsked = 0;


  ngOnInit() {
    this.totalWords = Object.keys(this.Dictionary).length;
    this.rightAnswers = 0;
    this.questionsAsked =0;
    if(this.currentIndex == 0){
      this.pickWordAndOptions();
    }
    console.log(this.Dictionary.length);
    this.currentIndex = 1;
  }

  @ViewChild('wordCard') wordCardComponent!: WordCardComponent;

  incrementScore() {
    this.rightAnswers++;
  }

   pickWordAndOptions(wasRight?: boolean) {
    this.questionsAsked++;
   
    this.currentIndex++;
    this.wordCardComponent?.reset();
    // Get all keys
    const keys = Object.keys(this.Dictionary);
    if (keys.length < 6) return; // Not enough words

    // Pick and remove a random word
    const randomIndex = Math.floor(Math.random() * keys.length);
    const pickedKey = keys[randomIndex];
    const pickedValue = this.Dictionary[pickedKey];
    delete this.Dictionary[pickedKey];

    // Pick 5 other random words (without removing)
    const otherKeys = keys.filter((k, i) => i !== randomIndex);
    const shuffled = otherKeys.sort(() => 0.5 - Math.random());
    const distractors = shuffled.slice(0, 5).map(key => ({
      label: this.Dictionary[key],
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
