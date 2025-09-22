import { Routes } from '@angular/router';
import { WordCardComponent } from './word-card/word-card.component';
import { QuestionWrapperComponent } from './question-wrapper/question-wrapper.component';
import { Top500Component } from './top500/top500.component';
import { Top1000Component } from './top1000/top1000.component';
import { Top2000Component } from './top2000/top2000.component';

export const routes: Routes = [
    {path: '500', component: Top500Component},
    {path: '1000', component: Top1000Component},
    {path: '2000', component: Top2000Component},
];
