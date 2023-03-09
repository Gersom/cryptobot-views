import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function GTextInput(props) {
  const { placehlr = 'texto' } = props;
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placehlr}
        placeholderTextColor="#737B8C"
        style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    width: '100%',
    borderRadius: 7,
    backgroundColor: '#3D4452',
    color: '#fff'
  }
});
