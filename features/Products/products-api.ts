// types
import { Product } from './product-types';
import { CatchError } from '../../common/types';
import { Action } from './products-reducer';

import commerce from '../../lib/commerce';

const fetchProducts = (dispatch: (action: Action) => void) => {
  commerce.products
    .list()
    .then((products: { data: Product[] }) => {
      dispatch({ type: 'fetch_products_success', products: products.data });
    })
    .catch((error: CatchError) => {
      dispatch({ type: 'fetch_products_failure', error: error.message });
    });
};

export { fetchProducts };
