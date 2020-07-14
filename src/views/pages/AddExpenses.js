import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Text,
  Input,
  Toggle,
  CheckBox,
  Radio,
  Calendar,
} from "@ui-kitten/components";
import { colors, text } from "../../helper/GlobalStyle";

const AddExpenses = ({ requisitions }) => {
  const [fixExpense, setFixExpense] = useState(false);
  const [paymentType, setPaymentType] = useState("cash");
  const [priorityLevel, setPriorityLevel] = useState("highest");
  const [parceledOut, setParceledOut] = useState(false);
  const [date, setDate] = useState(new Date());
  
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");


  const handleCreateExpense = async () => {
    try {
      const params = {
        _id: "5ee038792cbd704d399ecf0c",
        category,
        description: description,
        payDate: date,
        validity: date,
        paymentType: {
          cash: paymentType === "cash" ? true : false,
          credit: paymentType === "credit" ? true : false,
          installments: 0,
          parceledOut,
        },
        price: parseInt(price),
        priority: priorityLevel,
        type: fixExpense ? "fixed" : "variable",
      };

      await requisitions.create(params);

      setVisibleModal(false);
      handleClearSites();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClearSites = () => {
    setDescription('')
    setFixExpense(false)
    setDate(new Date())
    setPaymentType('cash')
    setPrice('')
    setPriorityLevel('highest')
    setParceledOut(false)
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>registre um gasto</Text>
      <Input
        placeholder="Descrição"
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
        onChange={(isFixed) => setFixExpense(isFixed)}
      >
        {!fixExpense ? (
          <Text style={styles.text}>Não</Text>
        ) : (
          <Text style={styles.text}>Sim</Text>
        )}
      </Toggle>
      {fixExpense && (
        <>
          <Text style={styles.label}>Selecione a data:</Text>
          <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} style={styles.calendar} />
        </>
      )}

      <Input
        placeholder="Categoria"
        style={styles.field}
        value={category}
        onChange={(event) => setCategory(event.nativeEvent.text)}
      />

      <View style={styles.check}>
        <CheckBox
          style={styles.text}
          checked={paymentType === "cash"}
          onChange={() => setPaymentType("cash")}
        >
          À vista
        </CheckBox>
        <CheckBox
          style={styles.text}
          checked={paymentType === "credit"}
          onChange={() => setPaymentType("credit")}
        >
          Crédito
        </CheckBox>
      </View>

      {paymentType === "credit" && (
        <>
          <Text style={styles.label}>Parcelado?</Text>
          <Toggle
            style={styles.toggle}
            checked={parceledOut}
            onChange={(isParceledOut) => setParceledOut(isParceledOut)}
          >
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
          checked={priorityLevel === "high"}
          onChange={() => setPriorityLevel("high")}
        >
          alta
        </Radio>
        <Radio
          style={styles.radio}
          status="warning"
          checked={priorityLevel === "medium"}
          onChange={() => setPriorityLevel("medium")}
        >
          média
        </Radio>
        <Radio
          style={styles.radio}
          status="danger"
          checked={priorityLevel === "low"}
          onChange={() => setPriorityLevel("low")}
        >
          baixa
        </Radio>
      </View>

      <Button style={styles.button2} onPress={() => handleCreateExpense()}>
        <Text style={styles.buttonText}>Registrar</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    width: 355,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    ...text.regular20,
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
  radios: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 12,
  },
  check: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  toggle: {
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    position: "absolute",
    right: 10,
    bottom: -650,
    zIndex: 999,
  },
  button2: {
    marginTop: 20,
  },
  buttonText: {
    ...text.regular18,
    color: colors.white,
  },
  radio: {
    marginTop: 5,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AddExpenses;
