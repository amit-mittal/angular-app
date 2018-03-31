import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Heroes } from './dummy-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id));
  }

  private log(message: string): void {
    this.messageService.add('HeroService: ' + message);
  }
}
