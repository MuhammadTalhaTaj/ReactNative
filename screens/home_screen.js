
///
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const user = {
    name: 'Muhammad Talha',
    email: 'talha@example.com',
    phoneNumber: '0310-5387510',
  };

  const handleEditProfile = () => {
    // Handle edit profile logic here
    // This function will be called when the Edit Profile button is pressed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{user.phoneNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={handleEditProfile}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  profileContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
