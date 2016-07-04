import {Component} from "angular2/core";
import FruitListService from "./fruit-list.service";

@Component({
  selector: "fruit-list",
  providers: [FruitListService],
  template: `
              <ul>
                <li *ngFor="let fruit of fruits">{{fruit}}</li>
              </ul>
            `,
})

export class FruitListComponent {
  public fruits: Array<string>;
  private fruitListService: FruitListService;

  constructor(fruitListService: FruitListService) {
    this.fruitListService = fruitListService;
    this.fruits = this.fruitListService.getFruits();
  }

}
