import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView, TouchableOpacity, Alert, Button} from 'react-native';



const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmitLogin = () => {
    if (username && password) {
      navigation.navigate("Home");
    } else {
      alert("Type your Username and Password");
    }
  };




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
    
}
