import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directive/hover.directive';
import { SortPipes } from './shared/pipes/sort.pipes';
import { ShortTextPipe } from './shared/pipes/short-text.pipes';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';
import { ProductsService } from './shared/services/products.service';
import { ProductFromComponent } from './shared/form/product-form.components';



@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShortTextPipe,
    CreateProductComponent,
    EditProductComponent,
    ProductFromComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListProductComponent
  ],
  providers:[
    SortPipes,
    ProductsService
  ]

})
export class ProductsModule { }
