/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { colors, margins, text } from '../../helper/GlobalStyle';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Input, Button, Text, Link } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import User from '../../controllers/User';
const user = new User();

const Login = ({ setLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLoginUser = async () => {
    const response = await user.login({email, password});
    if (response){
      setLoading(true);
    }
    navigation.navigate('Main');
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
          <Button style={styles.button} onPress={() => handleLoginUser()}>entrar</Button>
        </View>
        <View style={styles.economyStatus}>
          <Text style={styles.text}>Não possui conta</Text>
          <Button style={styles.button} onPress={() => navigation.navigate('Cadastrar')}>Cadastre-se</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: margins.global,
  icon: {
    marginTop: 100,
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
    top: 70,
  },
  button: {
    marginTop: 80,
    width: 300,
    alignSelf: 'center',
  },
});

export default Login;
