import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class ColorService{
    public url: String;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    getColors(page){
        let headers = new HttpHeaders({
            'Content-Type':'application/json'
        });
        
        return this._http.get(`${this.url}?page=${page}`, {headers});
    }    

}


