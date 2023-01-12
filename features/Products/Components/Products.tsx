import { useContext, useEffect } from 'react';

import { ProductsContext } from '../products-context';
import { fetchProducts } from '../products-api';

import ProductList from './ProductList';

const Products = () => {
  const [state, dispatch] = useContext(ProductsContext);

  useEffect(() => fetchProducts(dispatch), [dispatch]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }
  return <ProductList products={state.products} />;
};

export default Products;
