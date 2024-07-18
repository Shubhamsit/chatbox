import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextInputBox = ({ textInputProps, value, setValue }) => {

  const {
    width = 300,
    height,
    borderRadius,
    borderColor,
    borderWidth,
    backgroundColor,
    textAlign = 'left',
    fontSize = 15,
    fontWeight = 200,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    placeholderTextColor,
  } = textInputProps;

  return (
    <View style={[styles.container, { width, height }]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}

        style={[styles.input, { width, height, borderRadius, borderColor, borderWidth, backgroundColor, textAlign, fontSize, fontWeight, }]}

        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  input: {
    flex: 1,
    height: "100%",
    margin: 2,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
});
