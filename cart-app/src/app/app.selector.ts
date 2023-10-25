// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { CartState } from './app.reducer';

// // const selectCartState = createFeatureSelector<CartState>('cart');

// // export const selectCartItems = createSelector(
// //   selectCartState,
// //   (state) => state.data
// // );

// export const selectCart = (state: any) => state.data;

// export const cartSelector = createSelector(
//   selectCart,
//   (state) => state.data
// );
//   export const selectFeature = (state: any) => state.counter;
// export const selectFeatureCount = createSelector(
//     selectFeature,
//     (state: any) => state.counter
//   );

import { createSelector } from '@ngrx/store';
import { ICart } from './app.reducer';

export interface AppStateInterface {
  products: ICart;
}
export const selectFeature = (state: AppStateInterface) => state.products;

export const cartSelector = createSelector(
  selectFeature,
  (state) => state.products
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
