import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { globalStyles } from '@styles/styles';
import { LoginScreenProps } from '@types';

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simulate login process
        if (username === 'Pair' && password === 'Programmer') {
            navigation.replace("BottomTabs");
        } else {
            Alert.alert('Invalid Credentials',
                'The username is Pair, the password is Programmer'
            );
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Log In</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Email Address"
                placeholderTextColor={globalStyles.placeholder.color}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Password"
                placeholderTextColor={globalStyles.placeholder.color}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Log In" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={globalStyles.link}>Forgot password?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
