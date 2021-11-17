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
      alert("Fill in credentials");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ADD8c6",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://media.istockphoto.com/photos/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden-picture-id1280856062?b=1&k=20&m=1280856062&s=170667a&w=0&h=wQu-c2ZjzeCBkAGEj69xpF611lx1i_xim48vOCj_Dw0=",
        }}
        style={{
          width: 180,
          height: 170,
          borderRadius: 10,
          marginBottom: 15,
          transform: [{ rotate: "20deg" }],
        }}
      />
      <Text style={{ fontSize: 25, marginBottom: 20, marginTop: 20 }}>
        Welcome to Larbi's Shop
      </Text>
      <Text style={{ fontSize: 18 }}>
        Enter anything as password and Username
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
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