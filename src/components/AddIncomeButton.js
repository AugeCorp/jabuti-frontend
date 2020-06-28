import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Text, Modal, Card, Input, Toggle, Calendar } from '@ui-kitten/components'

const AddIncomeButton = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [checked, setFixExpense] = useState(false)
  const [date, setDate] = useState(new Date())

  const PlusIcon = (props) => (<Icon {...props} name='plus-outline'/>)

  const onFixExpenseChange = (checked) => {
    setFixExpense(checked)
  }

  return (
    <View>
      <Button onPress={() => setVisibleModal(true)} style={styles.button} accessoryLeft={PlusIcon} />

      <Modal visible={visibleModal} style={styles.modal}>
        <Card disabled={true}>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />
          <Text>É uma renda fixa?</Text>
          <Toggle checked={checked} onChange={(isFixed) => onFixExpenseChange(isFixed)}>
            {() => checked === false ? (<Text> Não</Text>) : (<Text> Sim</Text>)}
          </Toggle>

          <Text>Selecione o dia do recebimento:</Text>
          <Calendar date={date} onSelect={nextDate => setDate(nextDate)} />

          <Button style={styles.button2} onPress={() => setVisibleModal(false)}>
            Registrar
          </Button>
        </Card>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: 380,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  button2: {
    marginTop: 30,
  },
  radio: {
    marginTop: 5,
  }
})

export default AddIncomeButton
