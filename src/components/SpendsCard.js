import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const data = new Array(8).fill({
  title: 'Item',
  price: 1000
})

const SpendsCard = (props) => {

  const renderItem = ({ item }) => (
    <ListItem title={`${item.title} ${item.price + 1}`} />
  )

  return (
    <View>
      <Card style={styles.card}>
        <Card>
          <Icon style={styles.icon} fill='black' name='minus-outline' />
          <Text>Lista de Gastos</Text>
        </Card>
        <List
          style={styles.container}
          data={data}
          renderItem={renderItem}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default SpendsCard