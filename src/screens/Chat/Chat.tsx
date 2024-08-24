import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '@contexts/ThemeContext'; // Assuming your ThemeContext is in the same directory

const Chat = () => {
    const { isDarkMode } = useTheme(); // Get the dark mode state
    const [messages, setMessages] = useState([
        { id: '1', text: 'Welcome to Streignth! How can I assist you today?', sender: 'trainer' },
        // Add more messages as needed
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim() === '') return;

        const newMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInputText('');
    };

    const renderItem = ({ item }) => (
        <View style={[
            styles.messageContainer,
            item.sender === 'user' ? styles.userMessage : styles.trainerMessage,
            {
                backgroundColor: item.sender === 'user'
                    ? (isDarkMode ? '#1c1c1e' : '#007AFF')
                    : (isDarkMode ? '#2c2c2e' : '#f1f1f1')
            }
        ]}>
            <Text style={[
                styles.messageText,
                { color: item.sender === 'user' ? '#fff' : (isDarkMode ? '#fff' : '#000') }
            ]}>
                {item.text}
            </Text>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
            <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>
                Chat with Your Trainer
            </Text>

            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.chatList}
                inverted
            />

            <View style={[
                styles.inputContainer,
                { backgroundColor: isDarkMode ? '#1c1c1e' : '#fff', borderTopColor: isDarkMode ? '#333' : '#ddd' }
            ]}>
                <TextInput
                    style={[
                        styles.input,
                        { backgroundColor: isDarkMode ? '#2c2c2e' : '#fff', color: isDarkMode ? '#fff' : '#000' }
                    ]}
                    placeholder="Type your message..."
                    placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
    },
    chatList: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    messageContainer: {
        marginVertical: 8,
        padding: 12,
        borderRadius: 8,
        maxWidth: '70%',
    },
    userMessage: {
        alignSelf: 'flex-end',
    },
    trainerMessage: {
        alignSelf: 'flex-start',
    },
    messageText: {
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        borderTopWidth: 1,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginRight: 8,
    },
    sendButton: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 12,
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Chat;
