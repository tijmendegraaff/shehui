import React, { Component } from 'react';
import {
    Text,
    View,
		StyleSheet,
		TextInput
} from "react-native";

// Import Components
import ViewContainer from "../components/ViewContainer";
import StatusbarBackground from "../components/StatusbarBackground";

// Render App
export default class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			email: "",
			password: ""
		}
	}

	render(){
			return(
				<ViewContainer>
					<StatusbarBackground />
					<View>
						<TextInput
							style={styles.TextInput}
							onChangeText={(text) => this.setState({"email": text})}
							value={this.state.email}
							placeholder="EMAIL"
							autoCorrect={false}
							autoCapitalize={"none"}
							returnKeyType="next"
						/>
						<View style={styles.hairline} />

						<TextInput
							style={styles.TextInput}
							onChangeText={(text) => this.setState({"password": text})}
							value={this.state.password}
							placeholder="PASSWORD"
							secureTextEntry={true}
							autoCorrect={false}
							autoCapitalize={"none"}
							returnKeyType="go"
						/>
						<View style={styles.hairline} />
					</View>
				</ViewContainer>
			)
	}
}

const styles = StyleSheet.create({
	TextInput: {
		height: 50,
		paddingLeft: 20,
		paddingRight: 20,
		fontSize: 12,
	},
	hairline:{
		height: 1,
		backgroundColor: "black",
		marginLeft: 20,
		marginRight: 20		
	}
})