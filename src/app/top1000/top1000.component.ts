import { Component } from '@angular/core';
import { QuestionWrapperComponent } from "../question-wrapper/question-wrapper.component";
import { DICTIONARY1000 } from '../common/dictionary1000';
@Component({
  selector: 'app-top1000',
  imports: [QuestionWrapperComponent],
  templateUrl: './top1000.component.html',
  styleUrl: './top1000.component.scss'
})
export class Top1000Component {
Dictionary = DICTIONARY1000;
}
