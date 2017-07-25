import React, { Component } from 'react';
import {
    Text,
    View,
    Stylesheet
} from "react-native";
// Import scenes
import Login from './scenes/Authentication/Login'

// Render App
export default class App extends Component {
    render(){
        return(
            <Login />
        );
    }
}