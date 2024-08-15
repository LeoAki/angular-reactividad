import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsNs } from './namespaces/products/products.ns';
import { ProductsService } from './service/products.service';
import { AsyncPipe } from '@angular/common';
import { HotService } from './service/hot.service';
import { SubComponent } from './sub/sub.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, SubComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-reactividad';
  public produtData$!: Observable<ProductsNs.Detail>;
  productData!:ProductsNs.Detail;
  public subjectMessage$!: Observable<string>;

  subject: string = '';

  constructor(
    productService: ProductsService,
    private messageService: HotService
  ) {
    this.produtData$ = productService.getById(Math.floor(Math.random()*10 + 1));

    // productService.getById(Math.floor(Math.random()*10 + 1)).subscribe((data) => {
    //   this.productData = data;
    //   console.log(this.productData);
    // });

    // productService.getById(Math.floor(Math.random()*10 + 1)).subscribe((data) => {
    //   this.productData = data;
    //   console.log(this.productData);
    // });

    this.subjectMessage$ = messageService.messageSubect;

  }

  updateSubject(message: string) {
    this.messageService.editMessageSubject = message;
  }

}
