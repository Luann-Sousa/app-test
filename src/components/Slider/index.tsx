import Rect, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");
import { images } from "../../services/mockd.images";

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        style={{ maxWidth: width }}
        pagingEnabled
        horizontal
        onMomentumScrollEnd={(event) => {
          const result = String(event.nativeEvent.contentOffset.x);

          console.log("kkk", activeIndex);
          setActiveIndex(parseInt(event.nativeEvent.contentOffset.x / width));
        }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => (
          <Image source={{ uri: item?.url }} style={styles.image} />
        )}
      />
      {images.length > 0 ? (
        <View style={styles.containerBolinha}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.bolinha,
                { backgroundColor: index === activeIndex ? "blue" : "gray" },
              ]}
            />
          ))}
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefe",
  },
  image: {
    width: 410,
    height: 300,
  },
  containerBolinha: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
});
