import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Precos from './Precos'

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Precos/>
      </PaperProvider>
    );
  }
}

