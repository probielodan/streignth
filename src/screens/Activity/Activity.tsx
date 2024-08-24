import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext'; // Assuming your ThemeContext is in the same directory

interface Activity {
  id: string;
  name: string;
  description: string;
}


const Activity = () => {
  const { isDarkMode } = useTheme();

  const headerStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
    textAlign: 'center',
    textShadowColor: isDarkMode ? '#000000' : '#ffffff',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  };
  // Sample data for the activity list
  const activities = [
    {
      id: '1',
      name: 'Strength Training',
      description: 'Focus on muscle building exercises.',
    },
    {
      id: '2',
      name: 'Cardio',
      description: 'High-intensity exercises to burn calories.',
    },
    {
      id: '3',
      name: 'Yoga',
      description: 'Flexibility and mindfulness practices.',
    },
    // Add more activities as needed
  ];

  const renderItem = ({ item }: { item: Activity }) => (
    <TouchableOpacity
      style={[
        styles.activityContainer,
        { backgroundColor: isDarkMode ? '#1c1c1e' : '#f1f1f1' },
      ]}>
      <Text
        style={[styles.activityName, { color: isDarkMode ? '#fff' : '#000' }]}>
        {item.name}
      </Text>
      <Text
        style={[
          styles.activityDescription,
          { color: isDarkMode ? '#ccc' : '#555' },
        ]}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}>
      <Text style={headerStyle}>
        Today's Activities
      </Text>

      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.activityList}
      />
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
    backgroundColor: '#f4f4f4',
  },
  activityList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activityContainer: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default Activity;
