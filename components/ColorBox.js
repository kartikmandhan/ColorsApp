import React from "react";
import { StyleSheet, Text, View } from "react-native";

const colorBox = (props) => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };
  //   Here we essentially get the lightest 10% of the background colors and display black text for these, and white for the rest.
  const textColor = {
    color:
      parseInt(props.hexCode.replace("#", " "), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.boxText, textColor]}>
        {props.colorName} {props.hexCode}
      </Text>
      {props.children}
    </View>
  );
};

export default colorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "",
    textAlign: "center",
  },
});
