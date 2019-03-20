import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../styles';

import NetInfo from "@react-native-community/netinfo";

export default class HomeScreen extends Component {
  // =========== LIFE CYCLE ===========
  constructor(props) {
    super(props);
    console.log("[HomeScreen][constructor");
    this.state = {
      wifiStatus: false, 
      data : ""
    }
  }

  componentDidMount() {
    console.log("[HomeScreen][componentDidMount");
    // =========== DETECT WIFI ===========
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectivityChange);
    NetInfo.isConnected.fetch().done((isConnected) => {
      this.setState({ wifiStatus: isConnected });
      if(isConnected) {
        this._getData().then((data) => {
          this.setState({ data });
        });
      }
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

  // =========== CALL DATA RESTFUL API ===========
  _getData = async () => {
    let DOMAIN_API = "https://fighttechvn.github.io/api/data.json"; 
    try {
        const response = await fetch(DOMAIN_API, {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data.ExceptionMessage != undefined) { // edit tuỳ từng object api
            console.log('[HomeScreen][_getData][API]Lỗi API:', data);
            return false;
        }
        console.log("[HomeScreen][_getData][API] data: \n", data);
        return data;
    }
    catch (error) {
        console.log('[HomeScreen][_getData][API] Lỗi error:', error);
        return true;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Home Screen!</Text>
        <Text style={styles.title}>WIFI: {this._getTypeWifi()}</Text>

        {
          this.state.data == "" 
          ? <Text style={styles.instructions}>Lỗi không get được dữ liệu</Text> 
          : <View>
                <Text style={styles.instructions}>Age: {this.state.data.Age}</Text>
                <Text style={styles.instructions}>Name: {this.state.data.name}</Text>
                <Text style={styles.instructions}>Platfrom: {this.state.data.Platform}</Text>
                <Image source={{ uri: this.state.data.link }} resizeMode="contain" style={styles.containerImg} />
            </View>

        }
      </View> 
    );
  }
}