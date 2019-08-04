import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directive/hover.directive';
import { SortPipes } from './shared/pipes/sort.pipes';
import { ShortTextPipe } from './shared/pipes/short-text.pipes';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShortTextPipe,
    CreateProductComponent,
    EditProductComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListProductComponent
  ],
  providers:[
    SortPipes
  ]

})
export class ProductsModule { }
