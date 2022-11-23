import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import RootNavigator from './src/navigations/RootNavigator';

type Props = {};

const App = (props: Props) => {
  return <RootNavigator />;
};

export default App;

// Application styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
