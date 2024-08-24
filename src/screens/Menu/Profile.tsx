import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@contexts/ThemeContext';

function Profile() {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.profile, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}>
        <View style={styles.profileAvatarWrapper}>
          <Image
            alt=""
            source={{
              uri: 'https://scontent.fmli1-1.fna.fbcdn.net/v/t39.30808-1/347821370_639787824243285_4378367940982561221_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=-3VR9wCtBasQ7kNvgEnw8Eq&_nc_ht=scontent.fmli1-1.fna&oh=00_AYA-AK9mL_nzlMSJghYOsHMVr9Vi2lk18V5niROQUvDAmQ&oe=66C6D68C',
            }}
            style={styles.profileAvatar} />

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <FeatherIcon color="#fff" name="edit-3" size={15} />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={[styles.profileName, { color: isDarkMode ? '#fff' : '#414d63' }]}>
          Pair Programmer
        </Text>

        <Text style={[styles.profileAddress, { color: isDarkMode ? '#b0b0b0' : '#989898' }]}>
          123 Maple Street. Anytown, PA 17101
        </Text>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  /** Profile */
  profile: {
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
