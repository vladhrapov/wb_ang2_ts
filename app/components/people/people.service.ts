import { Injectable, Http, Response } from "angular2/core";

@Injectable()
export default class PeopleService {
  constructor(private _http: Http) {

  }

  getPeople() {
    return this._http.get("/data/data.json")
      .map((response: Response) => {
        return <Human[]>response.json().data
      })
  }
}

export class Human {
  constructor(public name: string) {

  }
}
