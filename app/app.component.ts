import {Component} from "angular2/core";
import {FruitListComponent} from "./components/fruit-list/fruit-list.component";

@Component({
  selector: "my-app",
  directives: [FruitListComponent],
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

  constructor() {
    this.toggler = true;
    this.myPadding = 19;
  }

  public toggle(): void {
    console.log("called: ");
    this.toggler = !this.toggler;
  }
}
