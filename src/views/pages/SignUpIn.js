import React, { useState } from 'react';
import { Input, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const SignUpIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.text} category="label">
        fazer login:
      </Text>
      <Input
        style={styles.inputField}
        placeholder="e-mail"
        value={value}
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        style={styles.inputField}
        placeholder="senha"
        value={value}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 250,
    margin: 30
  },
  inputField: {
    margin: 30,
    marginTop: 0
  }
});

export default SignUpIn;
