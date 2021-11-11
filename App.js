import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView, TouchableOpacity, Alert, Button} from 'react-native';
import  LOGIN from  './SRC/pages/LOGIN';

export default function App() {
 
 const forpress = () => console.log('Pic Pressed');
  return (
    <SafeAreaView style={styles.container}>

     <Text>LOGIN TO MY APP</Text>
      <TouchableOpacity onPress={forpress}> 
        
      <Image source={{
       width:200,
       height:210, 
        
       uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmCAhdKIfdkKTivymRAZpOfN9rsNILUWoJg&usqp=CAU"}}/> 
        
        </TouchableOpacity>
        <Button color="black" title="CLICK TO LOGIN" 
        onPress
       />
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
  