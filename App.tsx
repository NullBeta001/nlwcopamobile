import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Center, NativeBaseProvider, Text} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="#525252">
        <Text color="white" fontSize={24}>
          Hello React Native!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',

  }
});
