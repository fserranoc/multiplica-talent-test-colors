import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Color } from '../app/models/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    public title: string;
    public colors: Color[];

	constructor(
        private _route: Router
	){
        this.title = 'home';
      
	}

	ngOnInit(){
   // this._route.navigate(['colores/', 3]);
    }



}


