import React from "react";
import { StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";
import { useNavigation } from '@react-navigation/native'

const AddButton = ({screenName, requesitions}) => {
  const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;

  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.navigate(screenName)}
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