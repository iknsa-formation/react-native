// ./App.js
import React from 'react';
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

const products = [
  {
    "id": 1,
    "name": "Ergonomic Copper Bottle",
    "description": "Vel veritatis adflicto comparo vero cohors fugit benigne utrum quia tripudio valetudo tendo magni vilitas rerum ancilla arceo utroque degero crebro delego apostolus molestias coadunatio viscus laudantium quae spiculum solum voro usitas abduco surgo est sunt acidus demonstro subvenio omnis comes conitor annus aestivus doloribus caput caelum.",
    "image": "https://loremflickr.com/250/250",
    "price": "41788.72",
    "discount_amount": "38820.45",
    "status": true,
    "categories": [
      { "id": 4, "name": "Baby" },
      { "id": 7, "name": "Shoes, Grocery \u0026 Health" },
      { "id": 12, "name": "Tools, Electronics \u0026 Outdoors" },
      { "id": 15, "name": "Tools" },
      { "id": 10, "name": "Industrial \u0026 Kids" }
    ]
  },
  {
    "id": 2,
    "name": "Heavy Duty Wooden Knife",
    "description": "Termes depono spero iure vicinus venio spectaculum vapulus dicta stips victus utpote canonicus commodi summa totam amplitudo correptius vaco acervus in vulariter ea cultellus defluo ager terreo timor absconditus voluptas sit adiuvo hic esse chirographum cernuus tertius confugo dolore depromo sollicito animi et constans ambitus defessus tabella verbera vulgivagus comprehendo delego uberrime.",
    "image": "https://loremflickr.com/250/250",
    "price": "38770.32",
    "discount_amount": "38030.68",
    "status": true,
    "categories": [
      { "id": 16, "name": "Garden, Shoes \u0026 Baby" },
      { "id": 11, "name": "Shoes \u0026 Toys" },
      { "id": 10, "name": "Industrial \u0026 Kids" }
    ]
  },
  {
    "id": 3,
    "name": "Lightweight Plastic Lamp",
    "description": "Cubo cohaero denique urbanus basium corrumpo constans thema ancilla toties aureus votum damnatio accommodo attonbitus suscipio porro auctus confido virtus illum decerno clibanus uter adsuesco theatrum ventosus aspicio vereor tersus quia aer alius aufero minus causa et vindico ustulo uxor caelestis canis suppono delicate quidem angelus officia reiciendis colloco.",
    "image": "https://loremflickr.com/250/250",
    "price": "6817.55",
    "discount_amount": "3503.5",
    "status": true,
    "categories": [{ "id": 6, "name": "Grocery \u0026 Toys" }]
  }
];
