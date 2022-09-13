import {Injectable} from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn : "root"
})


export class Endpoints {
    get baseUrl() : string{
        if(environment.production){
          return "http://localhost:8080/student";
        } else{
          return "http://localhost:8080/student";
        }
      }


}

