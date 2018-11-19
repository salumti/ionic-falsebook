import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Facebook } from "../model/facebook";

@Injectable()
export class FacebookService{

    constructor(private http: HttpClient) {}

    getFacebook() : Observable<Facebook[]>{
        return this.http.get<Facebook[]>(
            'http://www.mocky.io/v2/5bf2c4ea2f0000d426cfa27c');
    }
}