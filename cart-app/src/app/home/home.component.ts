import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { postCart} from '../app.action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private store: Store,private toastr: ToastrService) {}

 data:Array<any>=[{
  id:1,
  title:"Item1",
  desc:"Some quick example text to build on the card title and make up the bulk of the card's content"
 },{
  id:2,
  title:"Item2",
  desc:"Some quick example text to build on the card title and make up the bulk of the card's content"
 },{
  id:3,
  title:"Item3",
  desc:"Some quick example text to build on the card title and make up the bulk of the card's content"
 }]

 increment(obj:any) {
  this.store.dispatch(postCart({obj:obj}));
  this.toastr.success('', 'Added in cart!');
}


}
