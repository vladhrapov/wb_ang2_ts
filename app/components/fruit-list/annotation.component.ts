import {Component, Input, Output} from "angular2/core";

@Component({
  selector: "annotation",
  //inputs: ["myFruit"],
  template: `
              <div>
                <b>My fruit is {{myFruit}}</b>
              </div>
            `,
})

export default class AnnotationComponent {
  @Input() myFruit: string;

  constructor() {
  }

}
