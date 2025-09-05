import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { WordCardComponent } from './word-card/word-card.component';
import { NavigationLayerComponent } from "./navigation-layer/navigation-layer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, WordCardComponent, NavigationLayerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
