import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'; 
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  // template: `<h1>hello</h1>`,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;

  heroes: Hero[] = [];
  selectedHero?: Hero;  

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // will run when initialized 
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(x => {
        console.log(x);
        this.heroes = x;
      })
  }

  onSelect (hero: Hero) : void{
    console.log(hero);
    this.selectedHero = hero;
    this.messageService.add(`You selected the Hero woth the id of ${hero.id} and name ${hero.name}`);
  }

}
