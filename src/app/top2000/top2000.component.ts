import { Component } from '@angular/core';
import { QuestionWrapperComponent } from "../question-wrapper/question-wrapper.component";
import { DICTIONARY2000 } from '../common/dictionary2000';
@Component({
  selector: 'app-top2000',
  imports: [QuestionWrapperComponent],
  templateUrl: './top2000.component.html',
  styleUrl: './top2000.component.scss'
})
export class Top2000Component {
Dictionary = DICTIONARY2000;
}
