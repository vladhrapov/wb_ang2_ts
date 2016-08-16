import { Component } from "angular2/core";
import PeopleService, { Human } from "./people.service";

@Component({
  selector: "people",
  providers: [PeopleService],
  // directives: [AnnotationComponent],
  template: `
              <ul>
                <li *ngFor="let fruit of fruits" (click)="selectFruit(fruit)">{{fruit}}</li>
              </ul>
              <button type="button" (click)="callHelloChild()">Call child</button>
            `,
})

export class PeopleComponent {
  public people: Array<Human>;
  private selectedFruit: string;
  private peopleService: PeopleService;

  constructor(peopleService: PeopleService) {
    this.peopleService = peopleService;
    this.people = this.peopleService.getPeople();
    console.log(this.people);
  }



}
