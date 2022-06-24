import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({leftIcon, placeholder}) => {
  return (
    <View style={styles.container}>
      {leftIcon}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#0000004d"
        selectionColor={'#000000'}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#f3f3f7',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  textInput: {
    marginLeft: 10,
    padding: 0,
    flex: 1,
    fontSize: 14,
  },
});
