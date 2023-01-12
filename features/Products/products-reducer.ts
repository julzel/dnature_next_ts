import { Product } from './product-types';

export type State = {
  loading: boolean;
  error: null | string;
  products: Product[];
};

export const initialState: State = {
  loading: true,
  error: null,
  products: [],
};

export type Action =
  | { type: 'fetch_products_request' }
  | { type: 'fetch_products_success'; products: Product[] }
  | { type: 'fetch_products_failure'; error: string };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'fetch_products_request':
      return { ...state, loading: true, error: null };
    case 'fetch_products_success':
      return { ...state, loading: false, products: action.products };
    case 'fetch_products_failure':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
