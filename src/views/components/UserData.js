import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { colors, text } from '../../helper/GlobalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { dateToString } from '../../helper/DataHelper'

const UserData = (props) => {
  const [details, setDetails] = useState(false)

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={() => setDetails(!details)}>
        {!details ? (
          <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />
          ) : (
          <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-upward-outline' />
        )}
        <View style={styles.nameCard}>
          <Text>carteira de</Text>
          <Text style={styles.name}>
            {props.name}
          </Text>
        </View>
        <Icon style={styles.icon} fill={colors.primary} name='person' />
      </TouchableOpacity>
      {details && (
        <>
          <View style={styles.detailsCard}>
            <View style={styles.details}>
              <Text style={styles.label}>último acesso: </Text>
              <Text style={styles.content}>{dateToString(props.lastAccess)}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.label}>email: </Text>
              <Text style={styles.content}>{props.email}</Text>
              <Text style={styles.alterPass}>alterar senha</Text>
            </View>
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  nameCard: {
    flex: 1,
    alignItems: 'flex-end'
  },
  name: {
    color: colors.primary,
    ...text.light20
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  icon: {
    alignSelf: 'center',
    width: 50,
    height: 50
  },
  detailsCard: {
    marginLeft: 20,
    marginBottom: 20,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...text.medium14,
    color: colors.midGrey,
  },
  content: {
    ...text.medium14,
    color: colors.grey,
  },
  alterPass: {
    ...text.medium12,
    color: colors.midGrey,
    textDecorationLine: 'underline',
    flex: 1,
    position: 'absolute',
    right: 20
  }
})

export default UserData
