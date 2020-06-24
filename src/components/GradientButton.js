import React from 'react'
import { StyleSheet, Button, Text, Animated, Easing } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const GradientButton = () => {
  return (
    <>
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={['#175FC2', '#5719BE']} 
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>
        entrar
      </Text>
    </LinearGradient>

    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={['#175FC2', '#5719BE']} 
      style={styles.borderLinearGradient}>
      <Button style={styles.button} title="entrar" color="transparent" />
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 50,
    width: 350,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 8,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  borderLinearGradient: {
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 50,
    width: 350,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    alignSelf: 'center',
    paddingTop: 50,
    color: 'transparent',
  }
})

export default GradientButton
