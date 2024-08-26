import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabs } from '@navigation';
import { Onboarding } from '@screens/Auth';
import { SignUp } from '@screens/Auth';
import { Login } from '@screens/Auth';
import { ResetPassword } from '@screens/Auth';
import { RootStackParamList } from '@types';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootStack;
