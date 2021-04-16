import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

const ColourPalette = (props) => {
  //   console.log(props.route.params);
  const { paletteName, colors } = props.route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Text style={styles.subHeading}>{paletteName}</Text>}
      renderItem={({ item }) => {
        return <ColorBox colorName={item.colorName} hexCode={item.hexCode} />;
      }}
    />
  );
};

export default ColourPalette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  subHeading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    padding: 10,
    fontFamily: "",
  },
});
