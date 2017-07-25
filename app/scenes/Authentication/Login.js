import React, { Component } from 'react';
import {
    Text,
    View,
		TextInput,
		Image
} from "react-native";

// Import Components
import ViewContainer from "../../components/ViewContainer";
import StatusbarBackground from "../../components/StatusbarBackground";

// Import StyleSheet
import { styles } from './styles';
// Import Resources

// Render Component
export default class Login extends Component {
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
					<View style={styles.logo}>
						<Image source={require('../../resources/sjauf_logo.png')} />
					</View>
					<View>
						<TextInput
							style={styles.TextInput}
							onChangeText={(text) => this.setState({email: text})}
							value={this.state.email}
							placeholder="EMAIL"
							autoCorrect={false}
							autoCapitalize={"none"}
							returnKeyType="next"
						/>
						<View style={styles.hairline} />

						<TextInput
							style={styles.TextInput}
							onChangeText={(text) => this.setState({password: text})}
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