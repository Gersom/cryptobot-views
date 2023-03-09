import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function GerButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00ACE6',
    borderRadius: 7,
    color: '#fff',
    width: '100%',
  },
  text: {
    color: '#282C34',
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600
  }
});
