import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '@styles/styles';
import { OnboardingScreenProps } from '@types';

const Onboarding: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Welcome to Streignth</Text>
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={globalStyles.link}>Already have an account? Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Onboarding;
