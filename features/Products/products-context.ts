import { createContext } from 'react';
import { State, Action, initialState } from './products-reducer';

export const ProductsContext = createContext<[State, (action: Action) => void]>(
  [initialState, () => initialState]
);
