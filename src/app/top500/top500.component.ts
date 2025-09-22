import { Component } from '@angular/core';
import { QuestionWrapperComponent } from "../question-wrapper/question-wrapper.component";
import { DICTIONARY500 } from '../common/dictionary500';


@Component({
  selector: 'app-top500',
  imports: [QuestionWrapperComponent],
  templateUrl: './top500.component.html',
  styleUrl: './top500.component.scss'
})
export class Top500Component {
Dictionary = DICTIONARY500;
}
