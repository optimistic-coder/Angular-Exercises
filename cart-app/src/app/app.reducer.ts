// import { createReducer, on,createSelector } from '@ngrx/store';
// import { addCart,removeCart } from './app.action';
// export interface CartState {
//     data: Array<{ id: number, title: string,desc:string }>;
 
//   }
  
//   export const initialState: CartState = {
//     data: [],
  
//   };


// export const cartReducer = createReducer(
//   initialState,
//   on(addCart, (state,{obj}) =>{
   
//     return{
//  ...state,
//  data:[...state.data,obj]
// }
//   }),
//   on(removeCart, (state,{obj}) => {
//     return{
//         ...state,
//         data:state.data.filter(item=>item.id!==obj.id)
//     }
//   })
// );


import { createReducer, on } from '@ngrx/store';

import * as PostsActions from './app.action';
export interface ICart {
  products: any[],
  error: string | null
}
export const initialState: ICart = {
  products: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(PostsActions.getCart, (state) => ({
    ...state,
  })),
  on(PostsActions.postCart, (state, action) => {
    state = {
      ...state,
      products: [...state.products, action.obj]
    }

    return state;
  }),
  on(PostsActions.removeItemFromCart, (state, action) => {
    const products = [...state.products];
    const index = products.findIndex(x => x.id === action.obj.id);
    products.splice(index, 1);
    
    state = {
      ...state,
      products: products
    }

    return state;
  }),
  on(PostsActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.obj,
  }))
);

