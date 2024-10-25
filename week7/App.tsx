import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Home({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Home</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Settings"
                    color="#4CAF50"
                    onPress={() => navigation.navigate("settings")}
                />
                <Button
                    title="Profile"
                    color="#2196F3"
                    onPress={() => navigation.navigate("profile")}
                />
            </View>
        </View>
    );
}

function Settings({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is settings screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to home"
                    color="#4CAF50"
                    onPress={() => navigation.navigate("home")}
                />
                <Button
                    title="Go to profile"
                    color="#2196F3"
                    onPress={() => navigation.navigate("profile")}
                />
            </View>
        </View>
    );
}

function Profile({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is profile screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to home"
                    color="#4CAF50"
                    onPress={() => navigation.navigate("home")}
                />
                <Button
                    title="Go to settings"
                    color="#2196F3"
                    onPress={() => navigation.navigate("settings")}
                />
            </View>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f4511e",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{ title: "My Home" }}
                />
                <Stack.Screen
                    name="settings"
                    component={Settings}
                    options={{ title: "My Settings" }}
                />
                <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{ title: "My Profile" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#333",
    },
    buttonContainer: {
        width: "80%",
        gap: 15,
    },
});
