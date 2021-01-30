import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ProductSummary = ({ product }) => {
  product.image = product.image.replace(/250/g, "50") + "?productId=" + product.id;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image, width: 50, height: 50 }} />
      </View>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.name}>{product.name}</Text>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.price}>{product.price} €</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  imageContainer: {
    borderRadius: 25,
    width: 50,
    height: 50,
    overflow: "hidden",
    marginRight: 15
  },
  name: {
    color: "#512B0B",
    lineHeight: 24,
    fontSize: 14
  },
  price: {
    alignSelf: "stretch",
    textAlign: "right"
  }
});

export default ProductSummary;
