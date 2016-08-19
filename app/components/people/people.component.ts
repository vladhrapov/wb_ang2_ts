import { Component, OnInit } from "angular2/core";
import PeopleService, { Human } from "./people.service";

@Component({
  selector: "people",
  providers: [PeopleService],
  template: `
              <ul>
                <li *ngFor="let person of people">{{person.name}}</li>
              </ul>
            `,
})

export class PeopleComponent implements OnInit {
  public people: Array<Human>;
  private peopleService: PeopleService;

  constructor(peopleService: PeopleService) {
    this.peopleService = peopleService;
  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.peopleService
      .getPeople()
      .subscribe(people => {
        this.people = people;
        console.log(this.people);
      });
  }

}
