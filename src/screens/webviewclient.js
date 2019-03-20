import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from "react-native-webview";

export default class WebViewClient extends Component {
    constructor(props) {
        super(props);
        this.linkHTML5 = this.props.navigation.getParam('linkHTML5');
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: this.linkHTML5 }}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}
