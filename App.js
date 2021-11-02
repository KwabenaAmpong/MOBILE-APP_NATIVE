import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView, TouchableOpacity, Alert, Button} from 'react-native';

export default function App() {
 const forPress = () => console.log('Text Pressed');
 const forpress = () => console.log('Pic Pressed');
  return (
    <SafeAreaView style={styles.container}>

     <Text numberOfLines = {3} onPress={forPress} >Welcome to my IA project</Text>
      <TouchableOpacity onPress={forpress}> 
        
      <Image source={{
       width:200,
       height:210, 
        
       uri: "https://picsum.photos/200/300"}}/> 
        
        </TouchableOpacity>
        <Button color="black" title="CLICK TO SIGNUP" 
        onPress={() => Alert.alert("SIGN UP", "Are You Sure you want to Sign Up", [
          { text: "YES" },
          { text: "NO" },
        ]
        )} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  