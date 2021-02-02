import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import ProductsApi from '../api/products';

const ProductDetailsScreen = ({ route }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const response = await ProductsApi.getProduct(route.params.productId);

      response.data.data.image += '?productId=' + response.data.data.id;

      setProduct(response.data.data);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image, height: Dimensions.get('window').height * 0.5, width: '100%', resizeMode: 'contain' }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} €</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: { flex: 1 },
  textContainer: { paddingRight: 10, paddingLeft: 10, flex: 2 },
  name: {
    color: '#49505c',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  price: {
    color: '#991c3f',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "stretch",
    textAlign: "right"
  },
  description: {
    color: '#363434',
    fontSize: 16,
    paddingBottom: 20
  }
});

export default ProductDetailsScreen;
