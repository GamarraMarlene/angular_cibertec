import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy{
  product: Product;
  updateSubs: Subscription
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const {id} = this.route.snapshot.params;
    this.productService.getProduct(+id).subscribe((products : Product) => {
    this.product = products; 
    console.log(this.product);
    });
    
  }
  onSubmit (parametro){
    console.log(parametro);
    this.updateSubs=this.productService.updateProducts ({id:102 ,name:'Text 10'}).subscribe((product: Product)=>{
      this.router.navigate(['/products']);
      console.log('Producto Modificado', product);
    });
  }
  ngOnDestroy(){
    this.updateSubs.unsubscribe();
  }
} 
