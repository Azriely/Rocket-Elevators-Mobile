import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'; 
import LoginScreen from '../screens/LoginScreen';
import ElevatorsScreen from '../screens/ElevatorsScreen';
import ElevatorStatus from '../screens/ElevatorStatus';
import 'react-native-gesture-handler';
import * as React from 'react';


const screens = {
    Login: {
        screen: LoginScreen
    },
    Elevators: {
        screen: ElevatorsScreen
    },
    'Elevator Status': {
        screen: ElevatorStatus
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);