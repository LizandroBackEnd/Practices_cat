import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponent from "./components/CatComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo con React Naties</Text>
      <CatComponent/>
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
