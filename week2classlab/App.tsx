import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    ScrollView,
    Text,
    ActivityIndicator,
    Image,
} from "react-native";

export default function App() {
    return (
        <ScrollView>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
            </Text>
            <Text style={styles.text}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },
    image: {
        width: 50,
        height: 50,
    },
});
