import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  // template: `<h1>hello</h1>`,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;  

  constructor() { }

  // will run when initialized 
  ngOnInit(): void {
  }

  onSelect (hero: Hero) : void{
    console.log(hero);
    this.selectedHero = hero;
  }

}
