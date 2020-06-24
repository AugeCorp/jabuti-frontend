import React from 'react';
import * as eva from '@eva-design/eva';
import { Input, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import GradientButton from '../components/GradientButton';

const SignUpIn = () => {
	const [value, setValue] = React.useState('');
		return (
			<View>
				<Text style={styles.text} category='label'>fazer login:</Text>
				<Input style={styles.emailInputField} placeholder='e-mail' value={value} onChangeText={nextValue => setValue(nextValue)} />
				<Input style={styles.passInputField} placeholder='senha' value={value} onChangeText={nextValue => setValue(nextValue)} />
				<GradientButton />
			</View>
  );
}

const styles = StyleSheet.create({
	text: {
		marginTop: 250,
		margin: 30,
	},
	emailInputField: {
		margin: 30,
		marginTop: 0,
	},
	passInputField: {
		margin: 30,
		marginTop: 0,
	},
	button: {
		margin: 30,
		marginTop: 10,
	}
})

export default SignUpIn
