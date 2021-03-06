import { Component, Input } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { FruitListComponent } from "./components/fruit-list/fruit-list.component";
import { PeopleComponent } from "./components/people/people.component";


@Component({
  selector: "my-app",
  directives: [FruitListComponent, PeopleComponent],
  providers: [
    HTTP_PROVIDERS
  ],
  template: `
              <h1 class="red">Hello World Component</h1>
              <ul>
                <li *ngFor="let item of [1,2,3]">{{item}}</li>
              </ul>
              <hr/>
              <fruit-list></fruit-list>
              <button type="button" [style.padding]="myPadding + 'px'" (click)="toggle()">Show</button>
              <div class="myDiv" *ngIf="toggler">show or hide :)</div>
              <p>
                <input type="text" [(ngModel)]="name" />
                <span>{{name}}</span>
              </p>
              <people></people>
            `,
  styles: [`
            .red {
              color: red;
            }
            .myDiv {
              font-size: 40px;
            }
          `]
})

export class AppComponent {
  public toggler: boolean;
  public myPadding: number;
  @Input() name: string;

  constructor() {
    this.toggler = true;
    this.myPadding = 19;
    this.name = "123123";
  }

  public toggle(): void {
    console.log("called: ");
    this.toggler = !this.toggler;
  }
}
