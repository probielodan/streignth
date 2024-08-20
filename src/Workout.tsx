import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, ScrollView, View } from 'react-native';
import { useTheme } from './ThemeContext'; // Import your theme context
import { RouteProp, useRoute } from '@react-navigation/native';

type WorkoutRouteParams = {
  Workout: {
    imageUri: string;
    title: string;
  };
};

type WorkoutScreenRouteProp = RouteProp<WorkoutRouteParams, 'Workout'>;

function Workout(): React.JSX.Element {
  const route = useRoute<WorkoutScreenRouteProp>();
  const { imageUri, title } = route.params;
  const { isDarkMode } = useTheme(); // Use the theme context

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.container}>
          <Image source={{ uri: imageUri }} style={styles.workoutImage} />
          <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
            {title}
          </Text>
          <Text style={[styles.instructions, { color: isDarkMode ? '#cccccc' : '#333333' }]}>
            Instructions: Perform the exercise as demonstrated in the image. Aim for 3 sets of 12-15 reps.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  workoutImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Workout;
