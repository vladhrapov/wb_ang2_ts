import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component.ts";


bootstrap(AppComponent)
  .then(success => console.log("App started"))
  .catch(error => console.log("Error"));
