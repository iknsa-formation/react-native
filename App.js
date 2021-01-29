// ./App.js
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  View,
  Image
} from 'react-native';
import { create } from "apisauce";

const api = create({ baseURL: "https://gorest.co.in/public-api/products" });

const getProductsApi = () => api.get('/');

const ProductSummary = ({ product }) => {
  product.image = product.image.replace(/250/g, "50") + "?productId=" + product.id;

  return (
    <View style={styles.productSummaryContainer}>
      <View style={styles.productSummaryImageContainer}>
        <Image source={{ uri: product.image, width: 50, height: 50 }} />
      </View>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.productSummaryName}>{product.name}</Text>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.productSummaryPrice}>{product.price} €</Text>
        </View>
      </View>
    </View>
  )
}

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await getProductsApi();

    setProducts(response.data.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) => <ProductSummary product={item} />}
        ItemSeparatorComponent={() => <View style={{ marginTop: 5, marginBottom: 5, borderTopWidth: 1, borderColor: "#ccc" }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  productSummaryContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  productSummaryImageContainer: {
    borderRadius: 25,
    width: 50,
    height: 50,
    overflow: "hidden",
    marginRight: 15
  },
  productSummaryName: {
    color: "#512B0B",
    lineHeight: 24,
    fontSize: 14
  },
  productSummaryPrice: {
    alignSelf: "stretch",
    textAlign: "right"
  }
});
