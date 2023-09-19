import { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

const image = require('../images/bg-image.png');
const backgroundColors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState(backgroundColors[0]);

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.appTitle}>Chat App</Text>
                <View style={styles.inputContainer}>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                        placeholder='Your Name'
                        placeholderTextColor="#757083AA"
                    />
                    <Text style={styles.textColorSelector}>Choose background color</Text>
                    <View style={styles.colorSelector}>
                        <TouchableOpacity
                            style={[
                                styles.circle,
                                color === backgroundColors[0] && styles.selectedCircle,
                                { backgroundColor: backgroundColors[0] },
                            ]}
                            onPress={() => setColor(backgroundColors[0])}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.circle,
                                color === backgroundColors[1] && styles.selectedCircle,
                                { backgroundColor: backgroundColors[1]},
                            ]}
                            onPress={() => setColor(backgroundColors[1])}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.circle,
                                color === backgroundColors[2] && styles.selectedCircle,
                                { backgroundColor: backgroundColors[2] },
                            ]}
                            onPress={() => setColor(backgroundColors[2])}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.circle,
                                color === backgroundColors[3] && styles.selectedCircle,
                                { backgroundColor: backgroundColors[3] },
                            ]}
                            onPress={() => setColor(backgroundColors[3])}
                        >
                        </TouchableOpacity>
                    </View>
                    </KeyboardAvoidingView>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Chat', { name: name, color: color })}
                    >
                        <Text style={styles.buttonText}>Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'space-between',
        padding: '6%',
    },
    appTitle: {
        flex: 2,
        fontSize: 45,
        fontWeight: '600',
        color: '#FFFFFF',
        alignSelf: 'center',
        paddingTop:40
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        padding: '6%',
        paddingBottom: 20,
    },
    textInput: {
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        padding: 15,
        borderWidth: 1,
        borderColor: '#757083',
        marginTop: 15,
        marginBottom: 15,
    },
    textColorSelector: {
        fontSize: 16,
        fontWeight: '300',
        color: '#8A95A5',
        marginBottom: 10,
    },
    colorSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    selectedCircle: {
        borderWidth: 2,
        borderColor: '#FF0000',
    },
    button: {
        backgroundColor: '#757083',
        padding: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Start;

