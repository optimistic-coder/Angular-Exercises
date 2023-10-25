import { createReducer, on } from '@ngrx/store';
import { addTodo, completeTodo,removeTodo } from './app.action';

export interface TodoState{
    todos:any[]
}

export const initialState: TodoState = {
    todos: [],
  };
  
  export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { text }) => ({ ...state, todos: [...state.todos, { id: state.todos.length + 1, text, completed: false }] })),
    on(removeTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(item=>item.id!==id) })),
    on(completeTodo, (state, { id }) => ({ ...state, todos: state.todos.map(todo => (todo.id === id ? { ...todo, completed: true } : todo)) }))
  );