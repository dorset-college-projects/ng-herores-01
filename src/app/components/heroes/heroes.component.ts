import { Component, OnInit } from '@angular/core';
//import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'WindStorm';

  hero: Hero = { id: 1, name: 'WindStorm' }

  heroes: Hero[] = [];


  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.getHeroes();
   
  }

  getHeroes(): void {

   // this.heroes = this.heroService.getHeroes();

   this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);

  }


  selectedHero?: Hero;
  onSelect(hero: Hero): void {

    this.selectedHero = hero;
    console.log(`Selecting ${hero.name}`)

  }

}
