import React, { Component } from 'react';
import {
    Text,
    View,
    Stylesheet
} from "react-native";

// Import Components
import ViewContainer from "./components/ViewContainer";

// Render App
export default class App extends Component {
    render(){
        return(
					<ViewContainer>
						<Text>
							Hello World!
						</Text>
					</ViewContainer>
        );
    }
}