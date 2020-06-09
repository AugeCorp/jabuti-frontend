import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, Layout, Toggle, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <Layout style={styles.container} level='1'>
        <Button style={styles.button} status='primary'>
        PRIMARY
        </Button>

        <Button style={styles.button} status='success'>
        SUCCESS
        </Button>

        <Button style={styles.button} status='info'>
        INFO
        </Button>

        <Button style={styles.button} status='warning'>
        WARNING
        </Button>

        <Button style={styles.button} status='danger'>
        DANGER
        </Button>

        <Button style={styles.button} status='basic'>
        BASIC
        </Button>

        <View style={styles.controlContainer}>
        <Button style={styles.button} status='control'>
            CONTROL
        </Button>
        </View>
        <Toggle>
            Checked:
        </Toggle>

        <View>
            <Text category='h1' appearance='hint'>H1</Text>
            <Text category='h2'>H2</Text>
            <Text category='h3'>H3</Text>
            <Text category='h4'>H4</Text>
            <Text category='h5'>H5</Text>
            <Text category='h6'>H6</Text>
        </View>

        <View>
            <Text category='s1'>S1</Text>
            <Text category='s2'>S2</Text>
        </View>

        <View>
            <Text category='p1'>P1</Text>
            <Text category='p2'>P2</Text>
        </View>

        <View>
            <Text category='c1'>C1</Text>
            <Text category='c2'>C2</Text>
            <Text category='label'>LABEL</Text>
        </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    backgroundColor: '#3366FF',
  },
});