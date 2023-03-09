import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
