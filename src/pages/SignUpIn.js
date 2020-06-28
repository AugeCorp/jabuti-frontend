import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { Input, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import GradientButton from '../components/GradientButton';

const SignUpIn = () => {
	const [value, setValue] = useState('')
	
	return (
		<View>
			<Text style={styles.text} category='label'>fazer login:</Text>
			<Input style={styles.inputField} placeholder='e-mail' value={value} onChangeText={nextValue => setValue(nextValue)} />
			<Input style={styles.inputField} placeholder='senha' value={value} onChangeText={nextValue => setValue(nextValue)} />
		</View>
  )
}

const styles = StyleSheet.create({
	text: {
		marginTop: 250,
		margin: 30,
	},
	inputField: {
		margin: 30,
		marginTop: 0,
	},
})

export default SignUpIn
