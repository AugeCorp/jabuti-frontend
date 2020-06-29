import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Text, Modal, Card, Input, Toggle, CheckBox, Radio } from '@ui-kitten/components'

const AddExpenseModal = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [fixExpense, setFixExpense] = useState(false)
  const [paymentType, setPaymentType] = useState('cash')
  const [priorityLevel, setPriorityLevel] = useState('highest')

  const PlusIcon = (props) => (<Icon {...props} name='plus-outline'/>)

  const onFixExpenseChange = (checked) => {
    setFixExpense(checked)
  }

  const handlePaymentType = (type) => {
    setPaymentType(type)
  }


  return (
    <View>
      <Button onPress={() => setVisibleModal(true)} style={styles.button} accessoryLeft={PlusIcon} />

      <Modal visible={visibleModal} style={styles.modal}>
        <Card disabled={true}>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <Text>É um gasto fixo?</Text>
          <Toggle checked={fixExpense} onChange={(isFixed) => onFixExpenseChange(isFixed)}>
            {fixExpense === false ? <Text> Não</Text> : <Text> Sim</Text>}
          </Toggle>
          <Input placeholder="Categoria" />

          <CheckBox checked={paymentType === 'credit'} onChange={() => handlePaymentType('credit')}>
            Crédito
          </CheckBox>
          <CheckBox checked={paymentType === 'cash'} onChange={() => handlePaymentType('cash')}>
            À vista
          </CheckBox>

          <Radio style={styles.radio} status='success' checked={priorityLevel === 'high'} onChange={() => setPriorityLevel('high')}>alta</Radio>
          <Radio style={styles.radio} status='warning' checked={priorityLevel === 'medium'} onChange={() => setPriorityLevel('medium')}>média</Radio>
          <Radio style={styles.radio} status='danger' checked={priorityLevel === 'low'} onChange={() => setPriorityLevel('low')}>baixa</Radio>

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

export default AddExpenseModal
