import React, { Component } from 'react';
import {
    Text,
    View,
    Stylesheet
} from "react-native";
// Import scenes
import Authentication from './scenes/Authentication'

// Render App
export default class App extends Component {
    render(){
        return(
            <Authentication />
        );
    }
}