import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { GameState } from './gameLogic';

interface GameButtonProps {
    onPress: () => void;
    gameState: GameState;
    buttonColor: string;
}

const GameButton: React.FC<GameButtonProps> = ({ onPress, gameState, buttonColor }) => {
    const getButtonText = () => {
        switch (gameState) {
            case "not started":
                return "Start Game";
            case "finished":
                return "Play Again";
            default:
                return "Click when green";
        }
    };

    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, { backgroundColor: buttonColor }]}
        >
            <Text style={styles.buttonText}>{getButtonText()}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default GameButton;
