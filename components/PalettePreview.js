import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

const PalettePreview = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.heading}>{props.palette.paletteName}</Text>
        <FlatList
          data={props.palette.colors.slice(0, 3)}
          keyExtractor={(item) => item.colorName}
          style={styles.colorContainer}
          renderItem={({ item }) => (
            <View style={[styles.color, { backgroundColor: item.hexCode }]} />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PalettePreview;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    fontFamily: "",
  },
  colorContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 30,
  },
  color: {
    width: 50,
    height: 50,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 10,
  },
});
