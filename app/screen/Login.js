import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmitLogin = () => {
    if (username && password) {
      navigation.navigate("Home");
    } else {
      alert("Enter Your Details Here");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlc29sdXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
        style={{
          width: 180,
          height: 170,
          borderRadius: 10,
          marginBottom: 15,
          transform: [{ rotate: "90deg" }],
        }}
      />
      <Text style={{ fontSize: 25, marginBottom: 20, marginTop: 20 }}>
        Welcome to the Online Shop
      </Text>
      <Text style={{ fontSize: 18 }}>
        
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username Here"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password Here"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSubmitLogin} style={styles.button}>
        <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: "60%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4045Fe",
    width: "60%",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});