import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from '../app.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'todo';
  userInput:string=''
  todos:Array<any>=[]

  constructor(private store:Store<{todos:any}>){
    store.select('todos').subscribe((state) => {
      console.log("3434",state)
      this.todos = state.todos
  
    });
  
  }



  addTodoItem(){
    this.store.dispatch(addTodo({text:this.userInput}))
    this.userInput = ''
  }
  removeTodoItem(id:number){
    this.store.dispatch(removeTodo({id:id}))
  }
}
