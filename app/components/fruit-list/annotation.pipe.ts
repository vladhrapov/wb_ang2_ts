import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
  name: "exclamationMark"
})
export default class ExclamationMarkPipe implements PipeTransform {
  transform(value: string, count: number) {
    value = value + " ";

    while (count > 0) {
      value += "!"
      count--;
    }

    return value;
  }
}
