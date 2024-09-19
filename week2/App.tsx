import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Text style={styles.headerText}>NEOBRUTALISM</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                    <Text style={styles.title}>Lorem Ipsum</Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>Dolor Sit Amet</Text>
                    <Text style={styles.paragraph}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700", // Bold yellow background
    },
    header: {
        backgroundColor: "#FF6B6B", // Bright red header
        padding: 20,
        alignItems: "center",
        borderBottomWidth: 4,
        borderBottomColor: "#000",
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
    },
    scrollView: {
        padding: 20,
    },
    card: {
        backgroundColor: "#4ECDC4", // Teal card background
        borderRadius: 0, // Sharp corners
        padding: 20,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: "#000",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: "#000",
        lineHeight: 24,
    },
});
