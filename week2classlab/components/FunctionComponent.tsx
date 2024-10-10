import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
interface FunctionalComponentProps {
    name: string;
    title?: string;
    defaultTimerValue?: number;
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({
    name,
    title,
    defaultTimerValue = 0,
}) => {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(defaultTimerValue);
    useEffect(() => {
        // Initial count setup
        setCount(10);

        // Set up timer
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <View>
            {title && <Text>{title}</Text>}
            <Text>Hello, {name}!</Text>
            <Text>Count: {count}</Text>
            <Text>Timer: {timer} seconds</Text>
            <Button
                title="Increment"
                onPress={() => setCount((prevCount) => prevCount + 1)}
            />
            <Button
                title="Decrement"
                onPress={() => setCount((prevCount) => prevCount - 1)}
            />
            <Button
                title={title ?? "Click me"}
                onPress={() => console.log(`Hello, ${name}!`)}
            />
        </View>
    );
};

export default FunctionalComponent;
