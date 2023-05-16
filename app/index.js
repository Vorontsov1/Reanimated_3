import React from "react";
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Pressable } from "react-native";
import { useFonts } from 'expo-font';
import cities from '../assets/data/cities';
import { Link } from "expo-router";



const City = ({ item }) => (
  <Link href={`/${item.id}`} asChild>
    <Pressable style={styles.city}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  </Link>
);


export default function App() {
  const [loaded] = useFonts({
    "AbrilFatface-Regular": require("../assets/fonts/AbrilFatface-Regular.ttf"),
    "Kalam-Regular": require("../assets/fonts/Kalam-Regular.ttf"),
    "Kalam-Light": require("../assets/fonts/Kalam-Light.ttf"),
    "Kalam-Bold": require("../assets/fonts/Kalam-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cities}
        renderItem={({ item }) => <City {...item} item={item} />} // Add item={item}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD841F",
  },
  city: {
    flex: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 50,
  },
  text: {
    fontFamily: "Kalam-Bold",
    fontSize: 25,
    color: "white",

    marginTop: 10,
  },
});