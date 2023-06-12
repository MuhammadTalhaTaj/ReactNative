
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,TouchableOpacity,Text, Image } from 'react-native';
import {AsyncStorage} from 'react-native';

export default function SignUp({ navigation }) {
  const [name, setName] = useState(null);
  
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function onPressSetData() {
    if(name==null  || email==null || password==null ){
      alert("These fields cannot be null")
      return;
    }
    const user_information = {
      "name": name,
     
      "email": email,
      "password": password,
    }
    AsyncStorage.setItem('userInformation', JSON.stringify(user_information));
    navigation.navigate("login");
   
  }


  return (
    <View style={styles.container}>
            <Image style={{height:300, width:300}} source={require("../images/Signup.png")}></Image>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
     
    <TouchableOpacity
        style={styles.editButton}
        onPress={
          onPressSetData
      }
      >
        <Text style={styles.editButtonText}>Need an account? signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
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

