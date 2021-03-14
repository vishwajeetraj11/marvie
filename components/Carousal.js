import * as React from "react";
import { View, SafeAreaView, Image } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class Carausal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      carouselItems: [
        {
          source: require("../assets/car1.png"),
        },
        {
          source: require("../assets/car2.png"),
        },
        {
          source: require("../assets/car3.png"),
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 24,
          overflow: "hidden",
          height: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={{ height: "100%", width: "100%" }} source={item.source} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginBottom: 24 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={398}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
            inactiveSlideOpacity={0.6}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.8}
          />
        </View>
      </SafeAreaView>
    );
  }
}
