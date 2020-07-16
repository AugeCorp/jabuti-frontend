/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  Button,
  Text,
  Input,
  Toggle,
  CheckBox,
  Radio,
  Calendar,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { colors, text, margins } from '../../helper/GlobalStyle';
import { createExpense } from '../../api/ExpenseController';

const AddExpenses = () => {
  const navigation = useNavigation();
  const [fixExpense, setFixExpense] = useState(false);
  const [paymentType, setPaymentType] = useState('cash');
  const [priorityLevel, setPriorityLevel] = useState('highest');
  const [parceledOut, setParceledOut] = useState(false);
  const [date, setDate] = useState(new Date());
  const [categoryIndex, setCategoryIndex] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');


  const categories = [
    'Alimentação',
    'Casa',
    'Estudo',
    'Lazer',
    'Saúde',
    'Transporte',
    'Vestimenta',
    'Outros',
  ];

  const handleCategory = (index) => {
    console.log(index);
    setCategoryIndex(index);
    setCategory(categories[index.row]);
  };

  const handleClearFields = () => {
    setDescription('');
    setFixExpense(false);
    setDate(new Date());
    setPaymentType('cash');
    setPrice('');
    setPriorityLevel('highest');
    setParceledOut(false);
    setCategoryIndex('');
    setCategory('');
  };

  const handleCreateExpense = async () => {
    const expense = {
      id: Math.floor(Math.random() * 100000000000000000),
      category,
      description,
      payDate: new Date(),
      validity: date,
      price: parseInt(price),
      priority: priorityLevel,
      type: fixExpense ? 'fixed' : 'variable',
    };
    const paymentType = {
      cash: paymentType === 'cash',
      credit: paymentType === 'credit',
      installments: 0,
      parceledOut,
    };
    await createExpense(expense, paymentType);
    handleClearFields();Main
    navigation.navigate('Main');
    navigation.navigate('Expenses');
  };

  const displayValue = categories[categoryIndex - 1];
  console.log(displayValue);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>registre um gasto</Text>

        <Input
          placeholder="Nome"
          style={styles.field}
          value={description}
          onChange={(event) => setDescription(event.nativeEvent.text)}
        />
        <Input
          placeholder="Preço"
          style={styles.field}
          value={price}
          onChange={(event) => setPrice(event.nativeEvent.text)}
        />

        <Text style={styles.label}>É um gasto fixo?</Text>
        <Toggle
          style={styles.toggle}
          checked={fixExpense}
          onChange={(isFixed) => setFixExpense(isFixed)}>
          {!fixExpense ? (
            <Text style={styles.text}>Não</Text>
          ) : (
            <Text style={styles.text}>Sim</Text>
          )}
        </Toggle>
        {fixExpense && (
          <>
            <Text style={styles.label}>Selecione a data:</Text>
            <Calendar
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
              style={styles.calendar}
            />
          </>
        )}

        <Select
          style={styles.field}
          placeholder="Categoria"
          selectedIndex={categoryIndex}
          onSelect={(index) => handleCategory(index)}
          value={displayValue}
        >

          <SelectItem title="Alimentação" />
          <SelectItem title="Casa" />
          <SelectItem title="Estudo" />
          <SelectItem title="Lazer" />
          <SelectItem title="Saúde" />
          <SelectItem title="Transporte" />
          <SelectItem title="Vestimenta" />
          <SelectItem title="Outros" />
        </Select>

        <View style={styles.check}>
          <CheckBox
            style={styles.text}
            checked={paymentType === 'cash'}
            onChange={() => setPaymentType('cash')}>
            À vista
          </CheckBox>
          <CheckBox
            style={styles.text}
            checked={paymentType === 'credit'}
            onChange={() => setPaymentType('credit')}>
            Crédito
          </CheckBox>
        </View>

        {paymentType === 'credit' && (
          <>
            <Text style={styles.label}>Parcelado?</Text>
            <Toggle
              style={styles.toggle}
              checked={parceledOut}
              onChange={(isParceledOut) => setParceledOut(isParceledOut)}>
              {!parceledOut ? (
                <Text style={styles.text}>Não</Text>
              ) : (
                <Text style={styles.text}>Sim</Text>
              )}
            </Toggle>
          </>
        )}

        <Text style={styles.label}>Qual o nível de prioridade?</Text>
        <View style={styles.radios}>
          <Radio
            style={styles.radio}
            status="success"
            checked={priorityLevel === 'high'}
            onChange={() => setPriorityLevel('high')}>
            alta
          </Radio>
          <Radio
            style={styles.radio}
            status="warning"
            checked={priorityLevel === 'medium'}
            onChange={() => setPriorityLevel('medium')}>
            média
          </Radio>
          <Radio
            style={styles.radio}
            status="danger"
            checked={priorityLevel === 'low'}
            onChange={() => setPriorityLevel('low')}>
            baixa
          </Radio>
        </View>

        <Button style={styles.button2} onPress={() => handleCreateExpense()}>
          <Text style={styles.buttonText}>Registrar</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: margins.global,
  card: {
    ...margins.content,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  title: {
    ...text.regular20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  field: { marginBottom: 10 },
  label: {
    ...text.light18,
    marginTop: 5,
    marginBottom: 5,
  },
  calendar: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  check: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  radios: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 12,
  },
  radio: {
    marginTop: 5,
  },
  toggle: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    bottom: -650,
    zIndex: 999,
  },
  button2: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    ...text.regular18,
    color: colors.white,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default AddExpenses;
