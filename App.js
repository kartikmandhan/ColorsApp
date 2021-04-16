import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import ColorBox from "./components/ColorBox";

export default function App() {
  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Violet", hexCode: "#6c71c4" },
    { colorName: "Blue", hexCode: "#268bd2" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Here are some boxes of different colours :
      </Text>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
        renderItem={({ item }) => {
          console.log(item);
          return <ColorBox color={item.colorName} hexValue={item.hexCode} />;
        }}
        // ListHeaderComponent=
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 10,
    fontFamily: "",
  },
});
