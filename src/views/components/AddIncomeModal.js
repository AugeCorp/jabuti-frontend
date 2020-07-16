/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text, Modal, Card, Input, Toggle, Calendar } from '@ui-kitten/components';
import {createIncome} from '../../api/IncomeController';

const AddIncomeModal = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [fixExpense, setFixExpense] = useState(false);
  const [date, setDate] = useState(new Date());

  const PlusIcon = (props) => (<Icon {...props} name="plus-outline"/>);

  const onFixExpenseChange = (checked) => {
    setFixExpense(checked);
  };

  
  const handleCreateExpense = async () => {
    const income = {
      id: Math.floor(Math.random() * 100000000000000000),
      type: fixExpense? 'fixed', 'variable',
      value: {type: 'bool', default: true},
      receiptDate: {type: 'date'},
    },
    value: 10000,
    type: 'fixed',
    receiptDate: new Date(),
    };
  };

  return (
    <View>
      <Button onPress={() => setVisibleModal(true)} style={styles.button} accessoryLeft={PlusIcon} />

      <Modal visible={visibleModal} style={styles.modal}>
        <Card>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />
          <Text>É uma renda fixa?</Text>
          <Toggle checked={fixExpense} onChange={(isFixed) => onFixExpenseChange(isFixed)}>
            {fixExpense === false ? <Text> Não</Text> : <Text> Sim</Text>}
          </Toggle>
          {fixExpense && (
            <>
              <Text>Qual o dia do recebimento?</Text>
              <Calendar date={date} onSelect={nextDate => setDate(nextDate)} />
            </>
          )}

          <Button style={styles.button2} onPress={() => { setVisibleModal(false); }}>
            Registrar
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 380,
  },
  button: {
    width: 355,
    height: 50,
    borderRadius: 15,
    marginTop: 30,
    alignSelf: 'center',
  },
  button2: {
    marginTop: 30,
  },
  radio: {
    marginTop: 5,
  },
});

export default AddIncomeModal;
