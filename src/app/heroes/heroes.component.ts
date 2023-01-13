import { Component, OnInit } from '@angular/core';

import {Hero} from '../models/hero';
import {HEROES} from '../models/mock-heroes';
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  selectedHero?: Hero;

  heroes = HEROES;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
