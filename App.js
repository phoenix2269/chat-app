import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Firebase/Firestore Imports
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the Navigator
const Stack = createNativeStackNavigator();

const App = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAzmIW1uzQKXLWOTMRvg5WU1ExN7ykZro0",
        authDomain: "messages-37b0d.firebaseapp.com",
        projectId: "messages-37b0d",
        storageBucket: "messages-37b0d.appspot.com",
        messagingSenderId: "507444794311",
        appId: "1:507444794311:web:59308ec5c84fa423db3fe2"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Start"
            >
                <Stack.Screen
                    name="Start"
                    component={Start}
                />
                <Stack.Screen name="Chat">
                    {props => <Chat db={db} {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
/* 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
}); */

export default App;