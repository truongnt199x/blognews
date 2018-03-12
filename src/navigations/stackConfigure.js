import {StackNavigator} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen/homeScreen';
import SearchScreen from '../screen/HomeScreen/searchScreen';
import DetailScreen from '../screen/DetailNewsScreen/detailScreen';
import SignIn from '../screen/UserScreen/signInScreen';
import SignUp from '../screen/UserScreen/signUpScreen';
import UserScreen from '../screen/UserScreen/userScreen';
const HomeStack = StackNavigator({
    Home:{screen:HomeScreen},
    SearchScreen:{screen:SearchScreen},
    DetailScreen:{screen:DetailScreen}
});

const UserStack = StackNavigator({
    User:{
        screen:UserScreen
    }
});

const SignedOut = StackNavigator({
    SignUp:{
        screen:SignUp,
        navigationOptions:{
            title:"Sign Up"
        }
    },
    SignIn:{
        screen:SignIn,
        navigationOptions:{
            title:"Sign In"
        }
    },
    
},
    {
        initialRouteName: 'SignIn',
    }
);
export {HomeStack,UserStack,SignedOut};