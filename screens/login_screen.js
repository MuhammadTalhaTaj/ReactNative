

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {AsyncStorage} from 'react-native';
export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    async function onPressGetDataAndVarify() {

        if (email == null || password == null) {
            alert("These fields cannot be null")
            return;
        }
        var userInformation = await AsyncStorage.getItem("userInformation");
        userInformation = JSON.parse(userInformation);
        //console.log(typeof(userInformation), userInformation);
        //console.log(userInformation['email']);
        if(email != userInformation['email']){ 
            alert("Incorrect Email");
            return;
        } 
        if(password != userInformation['password']){ 
            alert("Incorrect Password");
            return;
        } 
        
        navigation.navigate("profile", {name:userInformation['name'], lname:userInformation['lname'], email:userInformation['email']});
    }

  return (
    <View style={styles.container}>
      <Image style={{height:300, width:300}} source={require("../images/login.png")}></Image>
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
        onPress={() => navigation.navigate("Tab")}
      >
        <Text style={styles.editButtonText}>Need an account? signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'white'
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
