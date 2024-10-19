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
                <View style={styles.modalView}>
                    <ImageBackground
                        source={require("../assets/modal-background.jpg")}
                        style={styles.backgroundImage}
                        resizeMode="contain"
                    >
                        <Text style={styles.modalTitle}>All Scores</Text>
                        <FlatList
                            data={scores}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                        />
                    </ImageBackground>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                </View>
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
        backgroundColor: "white",
        width: "80%",
        maxHeight: "70%",
        borderRadius: 20,
        padding: 15,
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
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: 20,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#000",
        marginBottom: 15,
    },
    flatList: {
        width: "100%",
        paddingHorizontal: 10,
    },
    scoreItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginVertical: 2,
    },
    scoreText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
    },
    dateText: {
        fontSize: 14,
        color: "#666",
    },
    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    closeButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default ScoreModal;
