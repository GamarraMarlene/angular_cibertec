import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductsService
  ) { }


  ngOnInit() {
  }
  onSubmit(){
    console.log('onSubmit');
    this.productService.createProducto ({name:'Text 1'}).subscribe((product: Product)=>{
      console.log('Producto Creado', product);
    });
  }
}
