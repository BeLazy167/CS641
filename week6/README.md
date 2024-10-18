# Reaction Time Game

This is a React Native mobile application that tests the user's reaction time. The game challenges players to tap a button as quickly as possible when it turns green.

## Features

- Initial "Start Game" button to begin when the user is ready
- Random delay before the button turns green (2-5 seconds)
- Measures and displays the user's reaction time in milliseconds
- Prevents early taps and notifies the user if they tap too soon
- Keeps track of the best score
- Displays a history of all attempts in a modal view
- Pull-to-refresh functionality to reset the game
- Clean and intuitive user interface with background images

## Technologies Used

- React Native: A framework for building native apps using React
- Expo: A platform for making universal native apps for Android, iOS, and the web
- React Hooks: Used for state management and side effects (useState, useRef, useCallback)
- TypeScript: Adds static typing to JavaScript for improved developer experience and code quality

## React Native Components Covered

- `View`: Used for creating container components
- `Text`: Used for displaying text
- `Pressable`: Used for creating interactive buttons
- `StyleSheet`: Used for defining and organizing styles
- `SafeAreaView`: Ensures content is displayed within the safe area of the device
- `ImageBackground`: Used to set background images for the app and modal
- `FlatList`: Used to display the history of reaction times
- `Modal`: Used to create a popup view for displaying all scores
- `ScrollView`: Used for creating scrollable content
- `RefreshControl`: Used to implement pull-to-refresh functionality

## How It Works

1. The game starts with a "Start Game" button
2. Once started, the button turns blue and displays "Wait for green..."
3. After a random delay (2-5 seconds), the button turns green and displays "Click Now!"
4. The player should tap the button as quickly as possible
5. The app measures the time between the button turning green and the player's tap
6. The reaction time is displayed in milliseconds
7. If the player taps too early, they receive a "Too early!" message
8. The best score is updated if the current attempt is faster
9. The last 5 scores are displayed on the main screen
10. Players can view all scores by tapping the "View All Scores" button
11. Players can restart the game by tapping the "Play Again" button or pulling down to refresh

## Code Structure

- `App.tsx`: The main component containing the game UI and using the game logic
- `src/gameLogic.ts`: Custom hook containing the game logic
- `src/GameButton.tsx`: Reusable button component for the game
- `components/ScoreModal.tsx`: Modal component for displaying all scores
- Uses functional components and React Hooks for state management
- Implements a `useCallback` hook for the `startGame` function to optimize performance
- Uses `useRef` to store the start time and timeout references

## Styling

- Uses React Native's `StyleSheet` for styling components
- Implements a clean and modern design with a color scheme that provides clear visual feedback
- Utilizes `SafeAreaView` for better compatibility across different devices
- Uses `ImageBackground` for attractive visual appearances in both the main app and the modal

## Future Improvements

- Implement different difficulty levels (e.g., shorter/longer delays)
- Add sound effects for better user feedback
- Create a multiplayer mode for competing with friends
- Add animations for smoother visual transitions

This project serves as a great example of how to create a simple yet engaging game using React Native and modern React patterns, while also demonstrating component composition and reusability.

## How to Run

1. Clone the repository
2. Install dependencies with `npm install` or `yarn install`
3. Ensure you have the necessary image files in the `assets` folder (`background.jpg` and `modal-background.jpg`)
4. Run the app with `expo start`
5. Use the Expo Go app on your mobile device or an emulator to view the app

Enjoy testing your reaction time!
