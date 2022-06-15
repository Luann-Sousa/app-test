import Rect from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import { images } from "../../services/mockd.images";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEN_WIDTH = SLIDER_WIDTH * 0.88;

//tipagem do carousel
type SnapeCarouselProps = {
  item: {
    imageUrl: string;
  };
  index: number;
};

//styles corousel
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cardCarousel: {
    width: ITEN_WIDTH,
  },
  image: {
    height: 250,
    borderRadius: 8,
  },
});

function carouselCardItem({ item, index }: SnapeCarouselProps) {
  return (
    <View style={styles.cardCarousel} key={index}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );
}
export function SnapCarousel() {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={images}
        renderItem={carouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEN_WIDTH}
        useScrollView
      />
    </SafeAreaView>
  );
}
