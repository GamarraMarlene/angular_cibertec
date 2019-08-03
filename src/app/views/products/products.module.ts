import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directive/hover.directive';
import { SortPipes } from './shared/pipes/sort.pipes';
import { ShortTextPipe } from './shared/pipes/short-text.pipes';



@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShortTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListProductComponent
  ],
  providers:[
    SortPipes
  ]

})
export class ProductsModule { }
