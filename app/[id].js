import React from "react";
import { useSearchParams, useNavigation, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import cities from "../assets/data/cities";
import {Ionicons} from '@expo/vector-icons';


const CityDetails = () => {
  const { id } = useSearchParams();
  const router = useRouter();

  const city = cities.find((city) => city.id == id);
  const handlePressBack = () => {
    router.back();
   };

  return (
    <View style={styles.container}>
      <Image source={{ uri: city.image }} style={styles.image} />
      <Text style={styles.name}>{city.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Details:</Text>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          doloremque facilis at ducimus distinctio. Perspiciatis, in ducimus. Ut
          inventore facilis rem iusto illo pariatur deserunt at iste eveniet
          libero consectetur, hic, maxime quos voluptas tenetur. Labore
          voluptatum maiores ipsam necessitatibus, sit consequatur asperiores
          doloribus officia numquam, quam quos odio libero!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handlePressBack}
      >
        <Ionicons name="ios-arrow-back" size={30} color="#379237" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FD841F",
  },
  backButton: {
    position: "absolute",
    top: 50, // or however much you want to offset from the top
    left: 16, // or however much you want to offset from the left
    backgroundColor: "#fff", 
    borderRadius: 50,
    padding: 8,
  },
  image: {
    marginTop: 16,
    width: "100%",
    aspectRatio: 1,
  },
  fullImage: {
    width: "100%",
    height: 300,
  },
  name: {
    marginTop: 16,
    fontSize: 30,
    fontFamily: "AbrilFatface-Regular",
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontFamily: "Kalam-Bold",
    marginBottom: 8,
  },
  detailsText: {
    fontFamily: "Kalam-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default CityDetails;