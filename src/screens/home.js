import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

import NetInfo from "@react-native-community/netinfo";

export default class HomeScreen extends Component {
  // =========== LIFE CYCLE ===========
  constructor(props) {
    super(props);
    console.log("[HomeScreen][constructor");
    this.state = {
      wifiStatus: false
    }
    
  }

  componentDidMount() {
    console.log("[HomeScreen][componentDidMount");
    // =========== DETECT WIFI ===========
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectivityChange);
    NetInfo.isConnected.fetch().done((isConnected) => {
      this.setState({ wifiStatus: isConnected });
    });

  }

  componentWillMount() {
    console.log("[HomeScreen][componentWillMount");
  }

  // =========== DETECT WIFI ===========
  _getTypeWifi() {
    return this.state.wifiStatus == true ? "YES" : "NO";
  }
  _handleConnectivityChange = isConnected => {
    console.log("[_handleConnectivityChange] isConnected = ", isConnected);
    this.setState({ wifiStatus: isConnected });

  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Home Screen!</Text>
        <Text style={styles.title}>WIFI: {this._getTypeWifi()}</Text>
      </View>
    );
  }
}