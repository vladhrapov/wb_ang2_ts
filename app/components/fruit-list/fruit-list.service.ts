import {Injectable} from "angular2/core";

@Injectable()
export default class FruitListService {
  constructor() {

  }

  getFruits() {
    return ["pear", "banana", "apple", "cherry"];
  }
}
