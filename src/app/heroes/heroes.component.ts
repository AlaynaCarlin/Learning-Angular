import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  // template: `<h1>hello</h1>`,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  value = 1.23;

  hero: Hero = {
    id: 1,
    name: 'wind storm'
  };

  constructor() { }

  // will run when initialized 
  ngOnInit(): void {
  }

}
