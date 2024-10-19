import React, { useCallback, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    RefreshControl,
    Pressable,
    ScrollView,
} from "react-native";
import { useGameLogic } from "./src/gameLogic";
import GameButton from "./src/GameButton";
import ScoreModal from "./components/ScoreModal";

const App = () => {
    const {
        gameState,
        displayText,
        buttonColor,
        handlePress,
        resetGame,
        bestScore,
        setBestScore,
        allScores,
        setAllScores,
    } = useGameLogic();
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        resetGame();
        setBestScore(0);
        setAllScores([]);
        setRefreshing(false);
    }, [resetGame, setBestScore, setAllScores]);

    return (
        <ImageBackground
            source={require("./assets/background.jpg")}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>Reaction Time Game</Text>
                        <Text style={styles.bestScore}>
                            Best Score: {bestScore} ms
                        </Text>
                        <View style={styles.gameArea}>
                            <Text style={styles.displayText}>
                                {displayText}
                            </Text>
                            <GameButton
                                onPress={handlePress}
                                gameState={gameState}
                                buttonColor={buttonColor}
                            />
                        </View>
                        <Pressable
                            style={styles.viewScoresButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.viewScoresButtonText}>
                                View All Scores
                            </Text>
                        </Pressable>
                        <Text style={styles.instructionText}>
                            Pull down to reset the game
                        </Text>
                    </View>
                </ScrollView>
                <ScoreModal
                    isVisible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    scores={allScores}
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(236, 240, 241, 0.6)", // semi-transparent background
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#2c3e50",
        marginBottom: 40,
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    gameArea: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 20,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    displayText: {
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center",
        color: "#34495e",
    },
    instructionText: {
        marginTop: 20,
        fontSize: 16,
        color: "#2c3e50",
        textShadowColor: "rgba(255, 255, 255, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    bestScore: {
        fontSize: 20,
        marginBottom: 20,
        color: "#2c3e50",
        fontWeight: "bold",
        textShadowColor: "rgba(255, 255, 255, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    viewScoresButton: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    viewScoresButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default App;
