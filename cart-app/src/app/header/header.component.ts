import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data:any = []

  constructor(private store:Store<{ products: any }>){
    store.select('products').subscribe((state) => {
      console.log("3434",state.products)
      this.data = state.products
    });
  }
}
