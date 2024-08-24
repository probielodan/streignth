// src/types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Workout: { imageUri: string; title: string };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
