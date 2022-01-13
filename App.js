import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import ElevatorsScreen from './screens/ElevatorsScreen'
import Navigator from './routes/homeStack'
import 'react-native-gesture-handler';
import 'react-native-safe-area-context';


export default function App() {
  return (
    <Navigator />
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
