import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    ScrollView,
    Text,
    ActivityIndicator,
    Image,
    Button,
} from "react-native";
import FunctionalComponent from "./components/FunctionComponent";
import customStyles from "./style/cutom";
const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
});

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <ScrollView style={customStyles.container}>
            <Text style={customStyles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
            </Text>
            <Text style={customStyles.text}>
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
                neque eu tellus rhoncus ut eleifend nibh porttitor.
            </Text>
            <ActivityIndicator size="large" color="#000" />
            <Image
                source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
                style={styles.image}
            />
            <FunctionalComponent name="John" defaultTimerValue={-10} />
            <FunctionalComponent name="Jane" />
        </ScrollView>
    );
}
