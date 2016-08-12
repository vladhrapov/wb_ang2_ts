import {Component, ViewChild} from "angular2/core";
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
              <annotation [myFruit]="selectedFruit"></annotation>
              <button type="button" (click)="callHelloChild()">Call child</button>
            `,
})

export class FruitListComponent {
  public fruits: Array<string>;
  private selectedFruit: string;
  private fruitListService: FruitListService;
  @ViewChild(AnnotationComponent) annotationComponent: AnnotationComponent;

  constructor(fruitListService: FruitListService) {
    this.fruitListService = fruitListService;
    this.fruits = this.fruitListService.getFruits();
  }

  selectFruit(fruit: string) {
    alert(fruit);
    this.selectedFruit = fruit;
  }

  callHelloChild() {
    this.annotationComponent.helloFromChild();
  }

}
