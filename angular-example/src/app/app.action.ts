import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add Todo', props<{ text: string }>());
export const completeTodo = createAction('[Todo] Complete Todo', props<{ id: number }>());
export const removeTodo = createAction('[Todo] removeTodo Todo', props<{ id: number }>());
