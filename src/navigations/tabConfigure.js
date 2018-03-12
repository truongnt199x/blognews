import {TabNavigator,StackNavigator} from 'react-navigation';
import React from 'react';
//Import screen
// import HomeScreen from '../screen/HomeScreen/homeScreen';
import NotificationScreen from '../screen/NotificationScreen/notificationScreen';
import WriteNewScreen from '../screen/WriteNewScreen/writeNewScreen';
import UserScreen from '../screen/UserScreen/userScreen';
import BookMarkScreen from '../screen/BookmarkScreen/bookMarkScreen';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { HomeStack,UserStack } from './stackConfigure';
const routeConfiguration = {
    Home:{screen:HomeStack},
    BookMark:{screen:BookMarkScreen},
    WriteNew:{screen:WriteNewScreen},
    Notification:{screen:NotificationScreen},
    User:{screen:UserStack}
};

const tabConfiguration = {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused,tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            switch(routeName){
                case "Home":
                iconName = `ios-home${focused ? "":"-outline"}`;
                break;
                case "BookMark":
                iconName = `ios-bookmark${focused ? "":"-outline"}`;
                break;
                case "WriteNew":
                iconName = `ios-paper${focused ? "":"-outline"}`;
                break;
                case "Notification":
                iconName = `ios-notifications${focused ? "":"-outline"}`;
                break;
                case "User":
                iconName = `ios-person${focused ? "":"-outline"}`;
                break;
            }
            return <Ionicons name={iconName} size={26}/>;
        }
    }),
    tabBarOptions:{
        activeTintColor:"#000",
        inactiveTintColor:"#7e7e7e",
        activeBackgroundColor:"#d3d3d3",
        inactiveBackgrounColor:"#fff"
    }
};

export default TabBar = TabNavigator(routeConfiguration,tabConfiguration);





