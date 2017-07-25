import React, { Component } from 'react';
import {
    Text,
    View,
    Stylesheet
} from "react-native";

// Import Components
import ViewContainer from "./components/ViewContainer";
import StatusbarBackground from "./components/StatusbarBackground";

// Render App
export default class App extends Component {
    render(){
        return(
					<ViewContainer>
						<StatusbarBackground />
                        <Text>Hello guys!</Text>
					</ViewContainer>
        );
    }
}