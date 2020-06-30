import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Text, Modal, Card, Input, Toggle, CheckBox, Radio, Calendar } from '@ui-kitten/components'

const AddExpenseModal = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [fixExpense, setFixExpense] = useState(false)
  const [paymentType, setPaymentType] = useState('cash')
  const [priorityLevel, setPriorityLevel] = useState('highest')
  const [parceledOut, setParceledOut] = useState(false)
  const [date, setDate] = useState(new Date())

  const PlusIcon = (props) => (<Icon {...props} name='plus-outline'/>)

  return (
    <View>
      <Button onPress={() => setVisibleModal(true)} style={styles.button} accessoryLeft={PlusIcon} />

      <Modal visible={visibleModal} style={styles.modal}>
        <Card disabled={true}>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <Text>É um gasto fixo?</Text>
          <Toggle checked={fixExpense} onChange={(isFixed) => setFixExpense(isFixed)}>
            {!fixExpense ? <Text>Não</Text> : <Text>Sim</Text>}
          </Toggle>
          {fixExpense && <Calendar date={date} onSelect={nextDate => setDate(nextDate)} />}

          <Input placeholder="Categoria" />

          <CheckBox checked={paymentType === 'credit'} onChange={() => setPaymentType('credit')}>
            Crédito
          </CheckBox>
          
          <CheckBox checked={paymentType === 'cash'} onChange={() => setPaymentType('cash')}>
            À vista
          </CheckBox>
          {paymentType === 'credit' && (
            <>
              <Text>Parcelado?</Text>
              <Toggle checked={parceledOut} onChange={(isParceledOut) => setParceledOut(isParceledOut)}>
                {!parceledOut ? <Text>Não</Text> : <Text>Sim</Text>}
              </Toggle>
            </>
          )}

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
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  button2: {
    marginTop: 30,
  },
  radio: {
    marginTop: 5,
  }
})

export default AddExpenseModal
