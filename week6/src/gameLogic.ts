import { useState, useRef, useCallback } from "react";

export type GameState = "not started" | "waiting" | "ready" | "finished";
export type Score = {
    time: number;
    date: Date;
};


export const useGameLogic = () => {
    const [gameState, setGameState] = useState<GameState>("not started");
    const [displayText, setDisplayText] = useState(
        "Welcome to Reaction Time Game!"
    );
    const [buttonColor, setButtonColor] = useState("#3498db");
    const startTimeRef = useRef<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [bestScore, setBestScore] = useState(0);
    const [allScores, setAllScores] = useState<Score[]>([]);
    const startGame = useCallback(() => {
        setGameState("waiting");
        setDisplayText("Wait for green...");
        setButtonColor("#3498db");

        const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
        timeoutRef.current = setTimeout(() => {
            setGameState("ready");
            setDisplayText("Click Now!");

            setButtonColor("#2ecc71");
            startTimeRef.current = Date.now();
        }, randomDelay);
    }, []);

    const handlePress = () => {
        if (gameState === "not started") {
            startGame();
        } else if (gameState === "waiting") {
            setDisplayText("Too early! Try again.");
            setButtonColor("#e74c3c");
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setGameState("finished");
        } else if (gameState === "ready") {
            const reactionTime = startTimeRef.current
                ? Date.now() - startTimeRef.current
                : 0;
            if (reactionTime < bestScore || bestScore === 0) {
                setBestScore(reactionTime);
            }
            setAllScores([...allScores, { time: reactionTime, date: new Date() }]);
            setDisplayText(`Your reaction time: ${reactionTime} ms`);
            setButtonColor("#f39c12");
            setGameState("finished");
        } else if (gameState === "finished") {
            startGame();
        }
    };

    const resetGame = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setGameState("not started");
        setDisplayText("Welcome to Reaction Time Game!");
        setButtonColor("#3498db");
    };

    return {
        gameState,
        displayText,
        buttonColor,
        handlePress,
        resetGame,
        bestScore,
        setBestScore,
        allScores,
        setAllScores,
    };
};
