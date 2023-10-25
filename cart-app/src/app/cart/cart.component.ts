import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeItemFromCart } from '../app.action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  data:any = []

constructor(private store:Store<{ products: any }>,private toastr: ToastrService){

  
  store.select('products').subscribe((state) => {
    console.log("3434",state.products)
    this.data = state.products
  });
}
removeCart(obj:any) {
  this.store.dispatch(removeItemFromCart({obj:obj}));
  this.toastr.warning('', 'Removed from cart!');

}
}

