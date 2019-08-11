import { Inject, Injectable } from "@angular/core";
//import {products} from '../../../../mocks/products';
import Product from '../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class ProductsService {
    private api: string = environment.api;
    private endpoint:string = 'products';
    //products: Product[] = products;
    constructor(
        private http: HttpClient
    ){}

    getProducts(){
        const URL: string= `${this.api}/${this.endpoint}`;
        return this.http.get(URL);
        //return this.products;
       //return this.http.get('http://localhost:3000/products');
    }
    getProduct(id: number){
        const URL: string= `${this.api}/${this.endpoint}/${id}`;
        return this.http.get(URL);
       //const prod= this.products.filter(prod =>prod.id === id);
        //return prod [0];
        //return this.products.filter(prod =>prod.id === id);
    }
    deleteProduct(id:number){
        const URL: string= `${this.api}/${this.endpoint}/${id}`;
        return this.http.delete(URL);
        //return this.http.delete(`http://localhost:3000/products/$(id)`)
         //this.products= this.products.filter(prod =>prod.id != id);
        //return this.products;
        
    }
    createProducto(product: Product){
        const URL : string = `${this.api}/${this.endpoint}`;
        return this.http.post (URL, product,{
            headers:{
                'Content-type': 'application/json'
            }
        })
    }
    updateProducts (product: Product){
        const URL: string= `${this.api}/${this.endpoint}/${product.id}`;
        return this.http.put (URL, product,{
            headers:{
                'Content-type': 'application/json'
            }
        })
    }
}