import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import RootNavigator from './src/navigations/RootNavigator';
import {
  DestinationContextProvider,
  OriginContextProvider,
} from './src/context/contexts';

type Props = {};

const App = (props: Props) => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;

// Application styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
