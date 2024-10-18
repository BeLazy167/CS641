import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
interface FunctionalComponentProps {
    name: string;
    title?: string;
    defaultTimerValue?: number;
}

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     }
interface apiUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({
    name,
    title,
    defaultTimerValue = 0,
}) => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState<apiUser[]>([]);
    const [timer, setTimer] = useState(defaultTimerValue);
    useEffect(() => {
        // Initial count setup
        setCount(10);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
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
            {users.map((user) => (
                <Text key={user.id}>{user.name}</Text>
            ))}
        </View>
    );
};

export default FunctionalComponent;
