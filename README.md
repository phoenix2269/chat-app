## Chat-App

This is a mobile app built using React Native that allows users to chat with each other in real-time.

## Key Features

- User Profile - A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
- Chat Inaterface - A page displaying the conversation, as well as an input field, option button to take a picture, uplaod from library, and get/send location and submit button.
- Communication Options - The chat provides users with two additional communication features: sending images
and location data.
- Data Persistence - Data gets stored online and offline.

## Technologies Used

- React Native
- React Native Gifted Chat Library
- Expo
- Google Firestore DB
- Google Firebase Authentication
- AsyncStorage caching for offline use
- Google Firebase Cloud Storage (for storing images)
- Expo ImagePicker & MediaLibrary

## Installation

1.  Clone the repository.
2.  Navigate to the project directory in the terminal.
3.  Install Node.js
4.  Run ```shell npm install -g expo-cli``` to install the necessary dependencies.
3.  Run ```shell npx create-expo-app Chat-App --template```
4.  Run ```shell npx expo install```
5.  Run ```shell npm install firebase```
6.  Run ```shell expo install expo-image-picker```
7.  Run ```shell expo install expo-location```
8.  Run ```shell expo install expo-media-library```
9.  Run ```shell expo install react-native-maps```
10. Run ```shell npx expo start```

## Database Setup

To set up a database for this project: 
1. Create and sign-up for a database on https://firebase.google.com/
2. import personal firebase config from project settings tab in firebase console into App.js (replace existing code)
3. within firebase database rules adjust "allow read, wreite: if false;" to "allow read, write: if true;", then publish

## GitHub Repository

Check out this projects [Repository](https://github.com/phoenix2269/chat-app)