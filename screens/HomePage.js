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
import AddNewPaletteModal from "../components/AddNewPaletteModal";
const HomePage = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const URL = "https://color-palette-api.kadikraman.now.sh/palettes";
  const handleFetchPalettes = async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
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
        <AddNewPaletteModal
          onPress={() => {
            setIsModalVisible(false);
          }}
          navigation={navigation}
          setPalettes={setPalettes}
        />
      </Modal>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.button}> + Add a color scheme</Text>
            </TouchableOpacity>
          );
        }}
        data={palettes}
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
});
