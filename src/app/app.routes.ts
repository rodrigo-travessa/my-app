import { Routes } from '@angular/router';
import { WordCardComponent } from './word-card/word-card.component';
import { QuestionWrapperComponent } from './question-wrapper/question-wrapper.component';

export const routes: Routes = [
    {path: 'card', component: QuestionWrapperComponent}
];
