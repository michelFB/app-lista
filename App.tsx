import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  useEffect(()=>{
    console.log('foi!')
  },[]);
  

    return (
    <View style={styles.container}>
      <Text>Hello word</Text>
      <h1>Olá mundo inteiro!!!!</h1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
