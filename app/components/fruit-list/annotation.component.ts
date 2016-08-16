import {Component, Input, Output} from "angular2/core";
import ExclamationMarkPipe from "./annotation.pipe";

@Component({
  selector: "annotation",
  //inputs: ["myFruit"],
  pipes: [ExclamationMarkPipe],
  template: `
              <div>
                <b *ngIf="myFruit">My fruit is {{myFruit | exclamationMark:20 }}</b>
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
