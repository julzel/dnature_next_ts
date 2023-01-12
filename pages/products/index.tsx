import React, { useReducer } from 'react';
import Head from 'next/head';
import {
  reducer as productsReducer,
  initialState,
} from '../../features/Products/products-reducer';
import { ProductsContext } from '../../features/Products/products-context';
import Products from '../../features/Products';
import { Layout } from '../../common/components';

export default function ProductsContainer() {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <>
      <Head>
        <title>DNAture Productos</title>
        <meta
          name='description'
          content='La mejor alimentación natural para mascotas'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProductsContext.Provider value={[state, dispatch]}>
        <Layout>
          <Products />
        </Layout>
      </ProductsContext.Provider>
    </>
  );
}
