import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Icon,
  Text,
  Modal,
  Input,
  Toggle,
  CheckBox,
  Radio,
  Calendar,
} from "@ui-kitten/components";
import { colors, text } from "../../helper/GlobalStyle";

const AddExpenseModal = ({ requisitions }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [fixExpense, setFixExpense] = useState(false);
  const [paymentType, setPaymentType] = useState("cash");
  const [priorityLevel, setPriorityLevel] = useState("highest");
  const [parceledOut, setParceledOut] = useState(false);
  const [date, setDate] = useState(new Date());

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleCreateExpense = async () => {
    try {
      const params = {
        _id: "5ee038792cbd704d399ecf0c",
        category,
        description: title,
        payDate: fixExpense ? new Date(date) : new Date(),
        validity: fixExpense? new Date(date): new Date(),
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
      setVisibleModal(false);

      await requisitions.create(params);
    } catch (err) {
      console.log(err);
    }
  };

  const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;

  return (
    <View style={styles.modal}>
      {!visibleModal && (
        <Button
          onPress={() => setVisibleModal(true)}
          style={styles.button}
          accessoryLeft={PlusIcon}
        />
      )}

      <Modal
        visible={visibleModal}
        style={styles.modal}
        backdropStyle={styles.backdrop}
      >
        <View disabled={true} style={styles.card}>
          <Text style={styles.title}>Novo gasto</Text>
          <Input
            placeholder="Título"
            style={styles.field}
            value={title}
            onChange={(event) => setTitle(event.nativeEvent.text)}
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
            <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} />
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
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...text.light20,
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    ...text.light18,
    marginTop: 15,
  },
  radios: {
    flex: 1,
    flexDirection: "row",
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
    flexDirection: "row",
    marginTop: 10,
  },
  toggle: {
    marginBottom: 15,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  field: {
    marginBottom: 5,
  },
  modal: {
    width: 380,
    padding: 10,
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

export default AddExpenseModal;
