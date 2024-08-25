import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { globalStyles } from '@styles/styles';
import { ResetPasswordScreenProps } from '@types';

const ResetPassword: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleReset = () => {
        // Simulate password reset process
        Alert.alert(
            "Reset Password",
            "A password reset link has been sent to your email.",
            [
                {
                    text: "OK",
                    onPress: () => navigation.goBack(),
                },
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.logo}>Logo</Text>
            <Text style={globalStyles.title}>Reset Your Password</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Email Address"
                placeholderTextColor={globalStyles.placeholder.color}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="done"
            />
            <Button
                title="Send Reset Link"
                onPress={handleReset}
                color={globalStyles.button.backgroundColor}
            />
        </View>
    );
};

export default ResetPassword;
