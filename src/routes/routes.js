import {
    createStackNavigator,createAppContainer
} from 'react-navigation';
import HomeScreen from '../screens/home';
import TestScreen from '../screens/test';
import PlayVideo from '../screens/playvideo'

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
    }
}, {
    initialRouteName : "HomeScreen"
}
);

export default createAppContainer(AppStack);
