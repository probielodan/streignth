import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '@styles/styles';
import { SignUpScreenProps } from '@types';

const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Simulate sign-up process
        navigation.replace("BottomTabs");
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Sign Up</Text>
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
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

export default SignUp;
