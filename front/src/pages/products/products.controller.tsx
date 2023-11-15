import React, { useState, useEffect } from 'react';
import ProductsScreen from './products.screen';
import request from '../../helpers/request';

const ProductsController = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productSelected, setProductSelected] = useState<{
    id: number | null;
    name: string | null;
    description: string | null;
    value: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  }>({
    id: null,
    name: null,
    description: null,
    value: null,
    createdAt: null,
    updatedAt: null,
  });

  const handleGetProducts = async () => {
    setLoading(true);
    const { data, error } = await request({
      method: 'GET',
      path: 'produtos',
    });
    setLoading(false);
    if (error) {
      return;
    }

    setProducts(data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  const handlers = {
    products,
    loading,
    productSelected,
    setProductSelected,
  };

  return <ProductsScreen handlers={handlers} />;
};

export default ProductsController;
