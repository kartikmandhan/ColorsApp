import PalettePreview from "../components/PalettePreview";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Modal,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const HomePage = ({ navigation }) => {
  const [palette, setPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const URL = "https://color-palette-api.kadikraman.now.sh/palettes";
  const handleFetchPalettes = async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalette(palettes);
    }
  };
  useEffect(() => {
    handleFetchPalettes();
  }, []);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setIsRefreshing(false);
  };
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <MaterialIcons
              name="close"
              size={28}
              onPress={() => {
                setIsModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.button}> + Add a color scheme</Text>
            </TouchableOpacity>
          );
        }}
        data={palette}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            palette={item}
            onPress={() => navigation.navigate("ColourPalette", item)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: "dodgerblue",
    textAlign: "center",
    fontWeight: "bold",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  container: {
    flex: 1,
    paddingVertical: 8,
  },
  topContainer: {
    height: "5%",
    padding: 10,
    borderBottomWidth: 1,
    textAlignVertical: "center",
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
