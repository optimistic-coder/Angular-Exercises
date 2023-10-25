import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  userInput:string=''
  todos:Array<any>=[]
  @ViewChild('input1') input1: string;

  constructor(private store:Store<{todos:any}>){
    store.select('todos').subscribe((state) => {
      console.log("3434",state)
      this.todos = state.todos
  
    });
    this.input1 = ''
  }



  addTodoItem(){
    this.store.dispatch(addTodo({text:this.userInput}))
    this.userInput = ''
  }
  removeTodoItem(id:number){
    this.store.dispatch(removeTodo({id:id}))
  }
  
}
