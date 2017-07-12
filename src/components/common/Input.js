/* eslint-disable import/prefer-default-export, no-shadow */
import React, { PropTypes } from 'react';
import { TextInput, View, Text } from 'react-native';

const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
  containerStyle: PropTypes.object,
};

const defaultProps = {
  secureTextEntry: false,
  multiline: false,
  containerStyle: {},
};

const Input = (props) => {
  const { inputContainer, InputText, errorText } = styles;
  const {
    input: { value, onChange },
    meta: { touched, error },
    placeholder,
    secureTextEntry,
    multiline,
    containerStyle,
    ...otherProps
  } = props;

  return (
    <View style={[inputContainer, containerStyle]}>
      <TextInput
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={InputText}
        onChangeText={value => onChange(value)}
        value={value}
        {...otherProps}
      />
      {touched && error &&
        <View>
          <Text style={errorText}>{error}</Text>
        </View>}
    </View>
  );
};

const styles = {
  InputText: {
    color: '#000',
    padding: 10,
    marginBottom:10,
    fontSize: 18,
    borderColor:'#888',
    borderWidth:1,
    borderRadius:2
  },
  errorText: {
    color: '#ff5964',
    paddingLeft: 3,
  },
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export { Input };
