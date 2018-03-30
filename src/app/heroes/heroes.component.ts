import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../dummy-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes = Heroes;

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
  }
}
