import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const bgImage = {
  uri: "https://www.kindacode.com/wp-content/uploads/2022/03/blue-sky.jpeg",
};

export function HomeScreen() {
  const { user, logOut } = useAuth();

  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.emailText}>{user?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={logOut}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  emailText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF6347',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
