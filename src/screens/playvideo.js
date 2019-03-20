import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

export default class PlayVideo extends Component {
    constructor(props) {
        super(props);
        this.linkVideo = this.props.navigation.getParam('linkVideo');
        this.state = {

        };
    }

    videoError(data) {
        console.log('error Video', data);
    }

    render() {
        return (
            <View style={{flex:1}}>
            <Video source={{ uri: this.linkVideo }}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}
                fullscreen={true}                               // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo}
            />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black'
    },
});
