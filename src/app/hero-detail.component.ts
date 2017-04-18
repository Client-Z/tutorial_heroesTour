import {Component, Input} from "angular2/core";
import  { Hero } from './hero';


@Component({
	selector: "my-hero-detail",
	template: `
		<div *ngIf="hero">
	    <h2>{{hero.name}} details! TEST COMPONENT</h2>
	    <div><label>id: </label>{{hero.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name"/>
	    </div>
	    </div>
	`
})

export HeroDetailComponent {
	@Input();
	public hero = HERO;
}
