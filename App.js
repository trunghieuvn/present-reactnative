import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import  AppStack  from './src/routes/routes';


const AppContainer = createAppContainer(AppStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
