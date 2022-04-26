import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hideTransitionAnimation='none' hidden />
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
