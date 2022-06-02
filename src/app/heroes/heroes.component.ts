import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  // template: `<h1>hello</h1>`,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Wind Storm';

  constructor() { }

  // will run when initialized 
  ngOnInit(): void {
  }

}
