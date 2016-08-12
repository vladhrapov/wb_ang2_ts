import {Component, Input, Output} from "angular2/core";

@Component({
  selector: "annotation",
  //inputs: ["myFruit"],
  template: `
              <div>
                <b *ngIf="selectedFruit">My fruit is {{myFruit}}</b>
              </div>
            `,
})

export default class AnnotationComponent {
  @Input() myFruit: string;

  constructor() {
  }

  helloFromChild() {
    alert("Call child from parent");
  }

}
