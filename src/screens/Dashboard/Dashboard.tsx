import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { useTheme } from '@contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@types';

const WorkoutImage = ({ uri, title }: { uri: string, title: string }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Workout', { imageUri: uri, title })}
      style={styles.workoutImageContainer}
    >
      <Image source={{ uri }} style={styles.workoutImage} />
      <Text style={styles.workoutTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

function Dashboard(): React.JSX.Element {
  const { isDarkMode } = useTheme();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={styles.container}>
          <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
            Featured Workouts
          </Text>

          {/* Horizontal scroll view for suggested workouts */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.suggestedScrollView}
          >
            <WorkoutImage
              uri="https://images.unsplash.com/photo-1578229353624-a4007142da75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dCUyMGJpY2VwJTIwY3VybHxlbnwwfDF8MHx8fDI%3D"
              title="Bicep Curls"
            />
            <WorkoutImage
              uri="https://images.unsplash.com/photo-1662045010188-b5e91a7f504b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dCUyMHNxdWF0c3xlbnwwfDF8MHx8fDI%3D"
              title="Squats"
            />
            <WorkoutImage
              uri="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dCUyMHB1c2h1cHN8ZW58MHwxfDB8fHwy"
              title="Push-ups"
            />
            <WorkoutImage
              uri="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Dead-lifts"
            />
          </ScrollView>

          {/* Vertical scroll view with workout details */}
          <ScrollView
            style={styles.detailsScrollView}
            contentContainerStyle={styles.detailsContent}
          >
            <Text style={[styles.sectionTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
              Workout Instructions
            </Text>
            <View style={styles.workoutDetails}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1578229353624-a4007142da75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dCUyMGJpY2VwJTIwY3VybHxlbnwwfDF8MHx8fDI%3D"
                }}
                style={styles.workoutDetailImage}
              />
              <Text style={[styles.workoutDetailTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                Bicep Curls
              </Text>
              <Text style={[styles.workoutDetailText, { color: isDarkMode ? '#cccccc' : '#333333' }]}>
                Instructions: Stand with feet shoulder-width apart, hold dumbbells at your sides, curl the weights up to your shoulders, then lower them back down.
              </Text>
              <Text style={[styles.workoutDetailText, { color: isDarkMode ? '#cccccc' : '#333333' }]}>
                Sets: 3 sets of 12 reps
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
  suggestedScrollView: {
    marginBottom: 20,
  },
  workoutImageContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  workoutImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  workoutTitle: {
    marginTop: 5,
    textAlign: 'center',
  },
  detailsScrollView: {
    marginTop: 20,
  },
  detailsContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  workoutDetails: {
    alignItems: 'center',
  },
  workoutDetailImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  workoutDetailTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  workoutDetailText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Dashboard;
