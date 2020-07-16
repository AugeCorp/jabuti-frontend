import React from "react";
import { StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";

const AddButton = ({action, requesitions}) => {
  const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;

  return (
    <Button
      onPress={() => action()}
      style={styles.button}
      accessoryLeft={PlusIcon}
      requesitions={requesitions}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    position: "absolute",
    right: 10,
    zIndex: 999,
    marginRight: 10,
    bottom: 20,
  },
})

export default AddButton