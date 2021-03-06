import { Component , OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number=50;
    imageMargin: number=2;
    showImage: boolean = false;
    filterText: string ;
    products: IProduct[];
    errorMessage: string;

constructor (private _productService: ProductService){
}

toggleImage():void {
    this.showImage = !this.showImage;
}

ngOnInit(): void{
    this._productService.getProducts()
    .subscribe(products => this.products = products,
                error => this.errorMessage = <any> error);
}
OnRatingClicked(message: string):void {
    this.pageTitle = 'Product Title:' + message;
}

}