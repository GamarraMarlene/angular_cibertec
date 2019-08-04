import {Route} from '@angular/router';
import { CreateProductComponent } from './views/products/create-product/create-product.component';
import { ListProductComponent } from './views/products/list-product/list-product.component';
import { EditProductComponent } from './views/products/edit-product/edit-product.component';

export const router: Route[]=[
    {
        path: 'products',
        component: ListProductComponent
    },
    {
        path: 'products/create',
        component: CreateProductComponent
    },
    {
        path: 'products/:id',
        component: EditProductComponent
    },
    {
        path: '',
        redirectTo:'products',
        pathMatch:'full'

    }
]

