import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Homescreen
import HomeScreen from './src/screens/HomeScreen';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

// Application styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
