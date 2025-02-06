import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo1';
  num: number;
  numbers: number[];

  constructor() {
    console.log("test");
    this.num = 1;
    this.numbers = [5, 2, 9, 4];

  }

  // ngOnInit(): void {
  //   console.log("on init");
  // }
}
