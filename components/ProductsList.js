import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ProductsApi from '../api/products';
import ProductSummary from './ProductSummary';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await ProductsApi.getProductsApi();

    setProducts(response.data.data);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={product => product.id.toString()}
      renderItem={({ item }) => <ProductSummary product={item} />}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
}

const styles = StyleSheet.create({
  seperator: { marginTop: 5, marginBottom: 5, borderTopWidth: 1, borderColor: "#ccc" }
});

export default ProductsList;