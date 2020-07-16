/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { colors, margins, text } from '../../helper/GlobalStyle';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Input, Button, Text, Link } from '@ui-kitten/components';
import User from '../../controllers/User';
const user = new User();

const Register = ({ setLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleCreateUser = async () => {
    await user.create({email, password});

    setLoading(true);
  };
  return (
    <ScrollView style={styles.view}>
      <View style={styles.economyCard}>
        <View style={styles.economyStatus}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/jabutiLogo.png')}
          />
        </View>
        <View style={styles.view}>
          <Input
            placeholder="email"
            style={styles.field}
            autoCompleteType="email"
            value={email}
            onChange={(event) => setEmail(event.nativeEvent.text)}
          />
          <Input
            placeholder="senha"
            style={styles.field}
            textContentType="password"
            value={password}
            onChange={(event) => setPassword(event.nativeEvent.text)}
          />
          <Input
            placeholder="confirmar senha"
            style={styles.field}
            textContentType="password"
            value={confirm}
            onChange={(event) => setConfirm(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.economyStatus}>
          <Button style={styles.button} onPress={() => handleCreateUser()}>Cadastre-se</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: margins.global,
  icon: {
    marginTop: 80,
    alignSelf: 'center',
    marginBottom: 100,
  },
  field: {
    marginTop: 20,
    width: 300,
    minHeight: 45,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    top: 45,
  },
  button: {
    marginTop: 50,
    width: 300,
    alignSelf: 'center',
  },
});

export default Register;
