import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@contexts/ThemeContext';

function Settings() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#b0b0b0' : '#9e9e9e' }]}>
            Preferences
          </Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[
              styles.row,
              { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
            ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <FeatherIcon color="#fff" name="globe" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Language
            </Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon color={isDarkMode ? '#888' : '#C6C6C6'} name="chevron-right" size={20} />
          </TouchableOpacity>

          <View style={[
            styles.row,
            { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
          ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="moon" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Dark Mode
            </Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[
              styles.row,
              { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
            ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon color="#fff" name="navigation" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Location
            </Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon color={isDarkMode ? '#888' : '#C6C6C6'} name="chevron-right" size={20} />
          </TouchableOpacity>

          <View style={[
            styles.row,
            { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
          ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="at-sign" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Email Notifications
            </Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={emailNotifications => setForm({ ...form, emailNotifications })}
              value={form.emailNotifications}
            />
          </View>

          <View style={[
            styles.row,
            { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
          ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="bell" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Push Notifications
            </Text>

            <View style={styles.rowSpacer} />

            <Switch
              onValueChange={pushNotifications => setForm({ ...form, pushNotifications })}
              value={form.pushNotifications}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDarkMode ? '#b0b0b0' : '#9e9e9e' }]}>
            Resources
          </Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[
              styles.row,
              { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
            ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
              <FeatherIcon color="#fff" name="flag" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Report Bug
            </Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon color={isDarkMode ? '#888' : '#C6C6C6'} name="chevron-right" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[
              styles.row,
              { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
            ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="mail" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Contact Us
            </Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon color={isDarkMode ? '#888' : '#C6C6C6'} name="chevron-right" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[
              styles.row,
              { backgroundColor: isDarkMode ? '#1f1f1f' : '#f2f2f2' },
            ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon color="#fff" name="star" size={20} />
            </View>

            <Text style={[styles.rowLabel, { color: isDarkMode ? '#fff' : '#0c0c0c' }]}>
              Rate in App Store
            </Text>

            <View style={styles.rowSpacer} />

            <FeatherIcon color={isDarkMode ? '#888' : '#C6C6C6'} name="chevron-right" size={20} />
          </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 40,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

export default Settings;
