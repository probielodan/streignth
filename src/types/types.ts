import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
  BottomTabs: undefined;
  ResetPassword: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BottomTabs', 'Workout'>;
export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;
export type ResetPasswordScreenProps = StackScreenProps<RootStackParamList, 'ResetPassword'>;
export type OnboardingScreenProps = StackScreenProps<RootStackParamList, 'Onboarding'>;
