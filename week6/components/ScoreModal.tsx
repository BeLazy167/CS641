import React from "react";
import {
    Modal,
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable,
    ImageBackground,
} from "react-native";
import { Score } from "../src/gameLogic";

interface ScoreModalProps {
    isVisible: boolean;
    onClose: () => void;
    scores: Score[];
}

const ScoreModal: React.FC<ScoreModalProps> = ({
    isVisible,
    onClose,
    scores,
}) => {
    const renderItem = ({ item }: { item: Score }) => (
        <View style={styles.scoreItem}>
            <Text style={styles.scoreText}>{item.time} ms</Text>
            <Text style={styles.dateText}>{item.date.toLocaleString()}</Text>
        </View>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <ImageBackground
                    source={require("../assets/modal-background.jpg")}
                    style={styles.modalView}
                    imageStyle={styles.backgroundImage}
                >
                    <Text style={styles.modalTitle}>All Scores</Text>
                    <FlatList
                        data={scores}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.flatList}
                    />
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: "80%",
        maxHeight: "80%",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    backgroundImage: {
        borderRadius: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#fff",
    },
    flatList: {
        width: "100%",
    },
    scoreItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        marginVertical: 5,
        borderRadius: 5,
    },
    scoreText: {
        fontSize: 18,
    },
    dateText: {
        fontSize: 14,
        color: "#666",
    },
    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default ScoreModal;
