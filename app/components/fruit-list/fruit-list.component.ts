import {Component} from "angular2/core";
import FruitListService from "./fruit-list.service";
import AnnotationComponent from "./annotation.component";

@Component({
  selector: "fruit-list",
  providers: [FruitListService],
  directives: [AnnotationComponent],
  template: `
              <ul>
                <li *ngFor="let fruit of fruits" (click)="selectFruit(fruit)">{{fruit}}</li>
              </ul>

              <annotation *ngIf="selectedFruit" [myFruit]="selectedFruit"></annotation>
            `,
})

export class FruitListComponent {
  public fruits: Array<string>;
  private selectedFruit: string;
  private fruitListService: FruitListService;

  constructor(fruitListService: FruitListService) {
    this.fruitListService = fruitListService;
    this.fruits = this.fruitListService.getFruits();
  }

  selectFruit(fruit: string) {
    alert(fruit);
    this.selectedFruit = fruit;
  }

}
