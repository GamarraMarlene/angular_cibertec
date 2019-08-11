import { Component, OnInit, OnDestroy } from '@angular/core';
import Product from '../product.model';
import { SortPipes } from '../shared/pipes/sort.pipes';
import { ProductsService } from '../shared/services/products.service';
import { products } from 'src/app/mocks/products';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, OnDestroy {

  AllProducts: Product[];
  updateSubs: Subscription

  
  constructor(
    private sortPipe: SortPipes,
    private productService: ProductsService
  ){}


  ngOnInit() {
    //this.AllProducts= this.productService.getProducts();
    this.productService.getProducts().subscribe((products:Product[])=> {
      //console.log(data);
      this.AllProducts = products;
    });

  }
  onSort(value: string){
    this.sortPipe.transform(
      this.AllProducts,
      value
    );
  }
  onRemove(id: number){
    this.productService.deleteProduct(+id).subscribe(((response) => {
    this.AllProducts = this.AllProducts.filter(prod => prod.id !== id);
    })); 
    //this.sortPipe
    //this.AllProducts= this.AllProducts.filter(prod => prod.id !==id);
    //this.AllProducts= this.productService.eliminarProduct(+id);


  }
  ngOnDestroy(){
    this.updateSubs.unsubscribe();
  }
}


  
