import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function HomeContent({ navigation }: { navigation: any }) {
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

function NotificationsScreen({ navigation }: { navigation: any }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: "#f4511e",
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#333",
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 16,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeContent}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="notifications-outline"
                            size={22}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

function TopTabNavigator() {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#f4511e",
                tabBarInactiveTintColor: "gray",
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: "#f4511e",
                },
                tabBarStyle: {
                    backgroundColor: "#fff",
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarLabelStyle: {
                    textTransform: "none",
                    fontWeight: "bold",
                },
            }}
        >
            <TopTabs.Screen
                name="HomeStack"
                component={DrawerNavigator}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={20} color={color} />
                    ),
                }}
            />
            <TopTabs.Screen
                name="settings"
                component={Settings}
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="settings-outline"
                            size={20}
                            color={color}
                        />
                    ),
                }}
            />
            <TopTabs.Screen
                name="profile"
                component={Profile}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color={color}
                        />
                    ),
                }}
            />
        </TopTabs.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: "#f4511e",
                        padding: 15,
                        paddingTop: 45,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        My App
                    </Text>
                </View>
                <TopTabNavigator />
            </View>
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
