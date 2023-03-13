import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Conexion from './src/screens/Conexion';
import List from './src/screens/List';
import Config from './src/screens/Config';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Config />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
