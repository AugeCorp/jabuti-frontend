import React from 'react';

import { StyleSheet } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';

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