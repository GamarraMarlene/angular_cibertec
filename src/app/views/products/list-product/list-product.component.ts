import { Component, OnInit } from '@angular/core';
import Product from '../productmodel';
import { SortPipes } from '../shared/pipes/sort.pipes';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  AllProducts: Array<Product> = [
    {
      id:101,
      name: 'xelular 1'
    },
    {
      id:102,
      name: 'Laptop 1'
    },
    {
      id:102,
      name: 'Laptop 1'
    },
    {
      id:200,
      name: 'Table 1'
    },
    {
      id:201,
      name: 'Table table table'
    },
  ];

  constructor(private sortPipe: SortPipes) { }

  ngOnInit() {
    
  }
  onSort(value: string){
    this.sortPipe.transform(
      this.AllProducts,
      value
    );
  }
  onRemove(id: number){
    this.sortPipe
    this.AllProducts= this.AllProducts.filter(prod => prod.id !==id);
  }
}
