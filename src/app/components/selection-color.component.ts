import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import { ColorService } from '../services/color.service';
import { Color } from '../models/color';
import { showMessageBox } from '../../assets/js/selection-color.js';

@Component({
	selector: 'selection-color',
    templateUrl: '../views/selection-color.html',
    providers: [ColorService],

})

export class SelectionColorComponent implements OnInit{
    public title: string;
    public titleColor: String;
    public alertMessage: String;
    public data;
    public colors: Color[];
    public next_page;
    public prev_page;
    public actualPage:0;
    public totalPages:0

	constructor(
        private _colorService: ColorService,
        private _route: ActivatedRoute
	){
        this.title = 'COPY-COLORS';
        this.next_page = 1;
        this.prev_page = 1;
	}

	ngOnInit(){
      this.getColors();
    }


    getColors(page = 1){
            
            if(!page || page === 0){
                page = 1;
                this.next_page = page + 1;
            }else{
                this.next_page = page + 1;
                this.prev_page = page - 1;

                if(this.prev_page == 0){
                    this.prev_page = 1;
                }
            }

            console.log(' this.next_page',  this.next_page);

            this._colorService.getColors(page).subscribe(
                (response: any) => {
                    console.log('response',response);
                    
                    if(!response){
                        console.log('no response')
                        this.alertMessage = "No existen colores para mostrar.";
                    }else{
                        this.data = response;
                        this.colors =response.data;

                        this.next_page = response.page < response.total_pages ? this.next_page : response.total_pages; 

                        this.actualPage = response.page;
                        this.totalPages = response.total_pages;
                    }                    
                },
                error => {
                    const objError = <any>error;
                    
                    if(objError != null){
                        this.alertMessage = JSON.parse(objError._body);
                        console.log(error)
                    }
                }
                
            )
    }

    onCopyBoard(item){

        this.titleColor = item.color;
      

        const event = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', item.color);
            e.preventDefault();
            // ...('copy', e), as event is outside scope
            document.removeEventListener('copy', event);
        }
        document.addEventListener('copy', event);
        document.execCommand('copy');

        this.alertMessage = "El color ha sido copiado en el portapapeles.";
        showMessageBox(item.pantone_value);
    }

}


