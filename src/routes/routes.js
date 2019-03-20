import {
    createStackNavigator,createAppContainer
} from 'react-navigation';
import HomeScreen from '../screens/home';
import TestScreen from '../screens/test';
import PlayVideo from '../screens/playvideo';
import WebViewClient from '../screens/webviewclient';

export const AppStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            // bỏ default header của thư viện 
            header: null
        }
    },
    TestScreen: {
        screen: TestScreen 
    },
    PlayVideo: {
        screen: PlayVideo 
    },
    WebViewClient: {
        screen: WebViewClient 
    }
}, {
    initialRouteName : "HomeScreen"
}
);

export default createAppContainer(AppStack);
