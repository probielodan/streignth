import { StyleSheet } from 'react-native';
import { useTheme } from '@contexts/ThemeContext';

export const useGlobalStyles = () => {
    const { isDarkMode } = useTheme();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        },
        header: {
            color: isDarkMode ? '#ffffff' : '#000000',
            fontSize: 24,
            fontWeight: 'bold',
            padding: 16,
            backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
            textAlign: 'center',
            textShadowColor: isDarkMode ? '#000000' : '#ffffff',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 2,
        },
        sectionTitle: {
            fontSize: 20,
            color: isDarkMode ? '#ffffff' : '#000000',
            marginBottom: 8,
            paddingHorizontal: 16,
        },
        text: {
            fontSize: 16,
            color: isDarkMode ? '#cccccc' : '#333333',
            marginBottom: 4,
            paddingHorizontal: 16,
        },
        subText: {
            fontSize: 14,
            color: isDarkMode ? '#bbbbbb' : '#444444',
            marginBottom: 2,
            paddingLeft: 32,
        },
    });
};
