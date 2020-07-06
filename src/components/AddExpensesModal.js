import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Text, Modal, Card, Input, Toggle, CheckBox, Radio, Calendar } from '@ui-kitten/components'
import { colors, text } from '../helper/GlobalStyle'

const AddExpenseModal = ({ expenses, addNew }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  
  // Expense data
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [priority, setPriority] = useState('highest')
  // const [isFixed, setIsFixed] = useState(false)
  // const [paymentType, setPaymentType] = useState('cash')
  // const [parceledOut, setParceledOut] = useState(false)
  // const [date, setDate] = useState(new Date())

  useEffect(() => {
    if (description && price && category && priority) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }  
  }, [description, price, category, priority])


  const handleAddExpense = () => {
    addNew({
      _id: expenses.length + 1,
      description,
      price,
      category,
      priority,
      payDate: '06/07/2020',
    })
    setDescription('')
    setPrice('')
    setCategory('')
    setPriority('')
    setVisibleModal(false)
  }

  const PlusIcon = (props) => (<Icon {...props} name='plus-outline'/>)


  return (
    <>
      {!visibleModal && (
        <Button onPress={() => setVisibleModal(true)} style={styles.button} accessoryLeft={PlusIcon} />
      )}
      <View style={styles.modal}>
        <Modal visible={visibleModal} style={styles.modal} backdropStyle={styles.backdrop}>
          <View disabled={true} style={styles.card}>
            <Text style={styles.title}>Novo gasto</Text>

            <Input placeholder="Nome" onChangeText={value => setDescription(value)} style={styles.field} />

            <Input placeholder="Preço" onChangeText={value => setPrice(value)} style={styles.field} />

            <Input placeholder="Categoria" onChangeText={value => setCategory(value)} style={styles.field} />

            {/* <Text style={styles.label}>É um gasto fixo?</Text>

            <Toggle style={styles.toggle} checked={isFixed} onChange={(fixed) => setIsFixed(fixed)}>
              {!isFixed ? <Text style={styles.text}>Não</Text> : <Text style={styles.text}>Sim</Text>}
            </Toggle>
            {isFixed && <Calendar date={date} onSelect={nextDate => setDate(nextDate)} />} */}


            {/* <View style={styles.check}>
              <CheckBox style={styles.text} checked={paymentType === 'cash'} onChange={() => setPaymentType('cash')}>
                À vista
              </CheckBox>
              <CheckBox style={styles.text} checked={paymentType === 'credit'} onChange={() => setPaymentType('credit')}>
                Crédito
              </CheckBox>
            </View> */}

            {/* {paymentType === 'credit' && (
              <>
                <Text style={styles.label}>Parcelado?</Text>
                <Toggle style={styles.toggle} checked={parceledOut} onChange={(isParceledOut) => setParceledOut(isParceledOut)}>
                  {!parceledOut ? <Text style={styles.text}>Não</Text> : <Text style={styles.text}>Sim</Text>}
                </Toggle>
              </>
            )} */}

            <Text style={styles.label}>Qual o nível de prioridade?</Text>
            <View style={styles.radios}>
              <Radio style={styles.radio} status='success' checked={priority === 'Alta'} onChange={() => setPriority('Alta')}>alta</Radio>
              <Radio style={styles.radio} status='warning' checked={priority === 'Média'} onChange={() => setPriority('Média')}>média</Radio>
              <Radio style={styles.radio} status='danger' checked={priority === 'Baixa'} onChange={() => setPriority('Baixa')}>baixa</Radio>
            </View>

            <Button style={styles.btnRegister} onPress={() => handleAddExpense()} disabled={isSubmitDisabled}>
              <Text style={styles.buttonText}>Registrar</Text>
            </Button>
          </View>
        </Modal>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    ...text.medium18,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    ...text.light18,
    marginTop: 15,
  },
  radios: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  check: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  toggle: {
    marginBottom: 15,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  field: {
    marginBottom: 5, 
  },
  modal: {
    width: 380,
    padding: 10,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
  },
  btnRegister: {
    marginTop: 20,
    marginBottom: 5,
  },
  buttonText: {
    ...text.regular18,
    color: colors.white,
  },
  radio: {
    marginTop: 5,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default AddExpenseModal
