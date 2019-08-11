import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import Product from '../../product.model';


@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFromComponent implements OnInit{
    @Input() model: Product;
    @Input() type: string;
    buttonTitle: string ='';
    @Output() handleSubmit: EventEmitter<string> = new EventEmitter<string>();
    
    constructor(){


    }
    ngOnInit(){
        this.buttonTitle= this.type==='edit' ? 'Actualizar': 'Crear';
    }
    onChildClick(){
        this.handleSubmit.emit('hola papa');
    }
}