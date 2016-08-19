import { Injectable } from "angular2/core";
import { Http, Request, Response } from "angular2/http";
import {Observable} from 'rxjs/Rx';


@Injectable()
export default class PeopleService {
  constructor(private _http: Http) {

  }

  getPeople() {
    return this._http.get("/data/data.json")
      .map((response: Response) => {
        return <Human[]>response.json().data
      })
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }
}

export class Human {
  constructor(public name: string) {

  }
}
